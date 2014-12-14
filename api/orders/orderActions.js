'use strict';

var actions = require('../createActions')(Order);

actions.order = function(params, $dispatcher, res){
  $log('params', params);
  var merch = params.merch || 'CU5EeFyjWXJjMeHduZmDb9Ac';
  params.paidFor = false;

  var createOrder = $q.nbind(Order.create, Order);

  createOrder(params).then(function(unPaidForOrder){
    var orderContent = {
      description: 'Order # ' + unPaidForOrder._id
    };

    $Payment.createOrder(merch, orderContent);
  })
  .fail(function(err){
    $handleError(err);
  });
};

module.exports = actions;
