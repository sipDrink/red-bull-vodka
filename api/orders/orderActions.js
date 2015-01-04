'use strict';

var actions = require('../createActions')(Order);

actions.order = function(params, $dispatcher, res) {
  // TODO: do we need res if we're gonna declare the actions anyways?

  // THIS MIGHT BE WRONG
  // var merch = params.bar.merch || 'CU5EeFyjWXJjMeHduZmDb9Ac';

  // params.order.paidFor = false;

  var createOrder = $q.nbind(Order.create, Order);
  var populateOrder = $q.nbind(Order.populate, Order);

  console.log('order object:', params.order);
  createOrder(params.order)

    // this promise handles payments, which aren't currently enabled
//    .then(function(unPaidForOrder){
//      var orderContent = {
//        description: 'Order # ' + unPaidForOrder._id
//      };
//
//      return $Payment.createOrder(merch, orderContent)
//        .then(function(order){
//          return {
//            balancedOrder: order,
//            order: unPaidForOrder
//          };
//        });
//    })
    .then(function(order) {
      return populateOrder(order, 'bar')
    })
    .then(function(order) {
//      var messageToMobile = {
//        "to": "mobile",
//        "actions": {
//          "receiveOrder": {
//            "order": order.order,
//            "balancedOrder": order.balancedOrder
//          }
//        }
//      };

      var messageToVendor = {
        "to": "vendor",
        "actions": {
          "receiveOrder": {
            "order": order
            // "balancedOrder": order.balancedOrder
          }
        }
      };

//      $dispatcher.pub(message, [res.channel, params.bar.private_channel]);
      $dispatcher.pub(messageToVendor, order.bar.private_channel);
    })
    .fail(function(err){
      $handleError(err);
    });
};

actions.updateOrder = function(params, $dispatcher, res) {
  var findOrder = $q.nbind(Order.findOne, Order);



};

module.exports = actions;
