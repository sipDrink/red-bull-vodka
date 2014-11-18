'use strict';

var orders = require('./orders');
var users = require('./users');

module.exports = function(pb) {
  var Order = orders(pb);
  var User = users(pb);

  /*
    After a user signs up/in and is granted,
    an event from the auth server is
    sent via the user-auth channel.
    Subscribe to that event here and take the
    channel passed from the auth server and
    subscribe to that channel so the user can do
    CRUD
  */

  pb.subscribe({
    channel: 'user-auth',
    message: function(newUser){
      User.newPrivateChannel(newUser.channel);
    }
  });

};
