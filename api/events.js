'use strict';

// var orders = require('./orders/orderEvents');

module.exports = function(pb) {

  pb.subscribe({
    channel: 'user-auth',
    message: function(user){
      console.log('user-auth', user);
    }
  });
};
