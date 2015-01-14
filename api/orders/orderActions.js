'use strict';

var actions = require('../createActions')(Order);

actions.order = function(params, $dispatcher, res) {
  // THIS MIGHT BE WRONG
  // var merch = params.bar.merch || 'CU5EeFyjWXJjMeHduZmDb9Ac';

  // params.order.paidFor = false;

  var createOrder = $q.nbind(Order.create, Order);
  var populateOrder = $q.nbind(Order.populate, Order);
  var updateBar = $q.nbind(Bar.findByIdAndUpdate, Bar);

  createOrder(params.order)

    // this promise handles payments, which aren't currently enabled
//    .then(function(unPaidForOrder){
//      var orderContent = {
//        description: 'Order # ' + unPaidForOrder._id
//      };
//
    // TODO: ADD balancedOrder to order object
//      return $Payment.createOrder(merch, orderContent)
//        .then(function(order){
//          return {
//            balancedOrder: order,
//            order: unPaidForOrder
//          };
//        });
//    })
    .then(function(order) {
      return populateOrder(order, 'bar customers');
    })
    // TODO: POPULATE drinks ('bar drinks') from bar's list of drinks
    .then(function(order) {
      // $log('order is:', order);

      var messageToVendor = {
        "to": "vendor",
        "actions": {}
      };

      messageToVendor.actions[res.action] = order;

      // res.channel == message.respondTo.channel
      $dispatcher.pub(messageToVendor, order.bar.private_channel);
      // $dispatcher.pub(messageToMobile, res.channel);

      return order;
    })
    .then(function(order) {
      // $log('order in q is:', order);
      return updateBar(order.bar._id, { $push: { "orders": order._id}});
    })
    .fail(function(err) {
      $handleError(err);
    });
};

actions.updateOrder = function(params, $dispatcher, res) {
  // TODO: generalize this function so that it can be used to update the drink order by MOBILE (not just the status by VENDOR)
  // TODO: prevent this function from running if the order is being made
  // TODO: if status is completed, its _id should be deleted from the bar document

  var updateOrder = $q.nbind(Order.findByIdAndUpdate, Order);
  var populateOrder = $q.nbind(Order.populate, Order);
  var updateBar = $q.nbind(Bar.findByIdAndUpdate, Bar);

  updateOrder(params.orderInfo._id, {"status": params.orderInfo.status})
    .then(function(order) {
      $log('updated order:', order);
      return populateOrder(order, 'bar customers');
    })
    .then(function(order) {

      var messageToMobile = {
        "to": "mobile",
        "from": "API",
        "actions": {
          "receiveOrderUpdate": {
            "order": order
            // "balancedOrder": order.balancedOrder
          }
        }
      };

      var mobileResponseChannels = order.customers.map(function(customer) {
        return customer.auth_0_Id;
      });

      // $log('dispatching messages to channels:', mobileResponseChannels);
      // res.channel == message.respondTo.channel
      $dispatcher.pub(messageToMobile, mobileResponseChannels);
      return order;
    })
    .then(function(order) {
      if (order.status === 'redeemed') {
        return updateBar(order.bar._id, {$pull: {"orders": order._id}});
      }
    })
    .fail(function(err) {
      $handleError(err);
    });

};

actions.loadOrders = function(params, $dispatcher, res) {
  var findOrders = $q.nbind(Order.find, Order);
  var populateOrders = $q.nbind(Order.populate, Order);

  findOrders({_id: {$in: params.orderIds}})
    .then(function(orders) {
      // $log('updated order:', orders);
      return populateOrders(orders, 'bar customers');
    })
    .then(function(orders) {

      var messageToVendor = {
        "to": "vendor",
        "from": "API",
        "actions": {}
      };

      messageToVendor.actions[res.action] = orders;

      // $log('dispatching messages to channels:', mobileResponseChannels);
      // res.channel == message.respondTo.channel
      $dispatcher.pub(messageToVendor, res.channel);
      return orders;
    })
    .fail(function(err) {
      $handleError(err);
    });

};

module.exports = actions;
