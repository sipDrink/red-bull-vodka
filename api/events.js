'use strict';

// var orders = require('./orders');
var $User = require('./users')();
var bars = require('./bars');

module.exports = function() {
  // var Order = orders(pb);

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

  $dispatcher.sub('user-auth', function(newUser) {
    console.log('got auth');
    $User.newPrivateChannel(newUser);
  });

  // $dispatcher.sub('bar-auth').then().fail();


};
