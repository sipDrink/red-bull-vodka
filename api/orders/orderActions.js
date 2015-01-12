'use strict';

var actions = require('../createActions')(Order);

actions.order = function(params, $dispatcher, res) {
  // THIS MIGHT BE WRONG
  // var merch = params.bar.merch || 'CU5EeFyjWXJjMeHduZmDb9Ac';

  // params.order.paidFor = false;

  var createOrder = $q.nbind(Order.create, Order);
  var populateOrder = $q.nbind(Order.populate, Order);

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
      $log('order is:', order);

      var messageToVendor = {
        "to": "vendor",
        "actions": {}
      };

      messageToVendor.actions[res.action] = order;

      // res.channel == message.respondTo.channel
      $dispatcher.pub(messageToVendor, order.bar.private_channel);
      // $dispatcher.pub(messageToMobile, res.channel);
    })
    .fail(function(err) {
      $handleError(err);
    });
};

actions.updateOrder = function(params, $dispatcher, res) {
  // TODO: generalize this function so that it can be used to update the drink order by MOBILE (not just the status by VENDOR)
  // TODO: prevent this function from running if the order is being made

  var updateOrder = $q.nbind(Order.findByIdAndUpdate, Order);
  var populateOrder = $q.nbind(Order.populate, Order);

  updateOrder(params.orderInfo._id, {"status": params.orderInfo.status})
    .then(function(order) {
      return populateOrder(order, 'customers');
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

      $log('dispatching messages to channels:', mobileResponseChannels);
      // res.channel == message.respondTo.channel
      $dispatcher.pub(messageToMobile, mobileResponseChannels);
    })

};

module.exports = actions;
