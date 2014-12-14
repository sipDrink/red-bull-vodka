'use strict';

var actions = require('../createActions')(Order);

actions.order = function(params, $dispatcher, res){
  var merch = params.bar.merch || 'CU5EeFyjWXJjMeHduZmDb9Ac';

  $log(JSON.stringify(params));
  params.order.paidFor = false;

  var createOrder = $q.nbind(Order.create, Order);

  createOrder(params.order).then(function(unPaidForOrder){
    var orderContent = {
      description: 'Order # ' + unPaidForOrder._id
    };

    return $Payment.createOrder(merch, orderContent)
      .then(function(order){
        return {
          balancedOrder: order,
          order: unPaidForOrder
        };
      });
  })
  .then(function(order) {

    var message = {
      "to": "mobile",
      "actions": {
        "recieveOrder": {
          "order": order.order,
          "balancedOrder": order.balancedOrder
        }
      }
    };

    $dispatcher.pub(message, [res.channel, params.bar.private_channel]);
  })
  .fail(function(err){
    $handleError(err);
  });
};

module.exports = actions;
