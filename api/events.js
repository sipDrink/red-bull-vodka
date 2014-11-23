'use strict';

// var orders = require('./orders');
var users = require('./users');
var bars = require('./bars');

module.exports = function(pb) {
  // var Order = orders(pb);
  var $User = users(pb);
  // var $Bar = bars(pb);
  /*
    After a user signs up/in and is granted,
    an event from the auth server is
    sent via the user-auth channel.
    Subscribe to that event here and take the
    channel passed from the auth server and
    subscribe to that channel so the user can do
    CRUD
  */

  pb.sub({
    channel: 'user-auth',
    message: function(newUser){
      console.log('newUser');
      $User.newPrivateChannel(newUser);
    },
    error: function(error) {
      console.log('user-auth-error', error);
    }
  });

  pb.sub('bar-auth').then().fail();


};
