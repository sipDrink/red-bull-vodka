'use strict';
var actions = require('../createActions')(Bar);

actions.register = function(barId, $dispatcher) {
  $log('registering bar');
  /*
    Channels to grant bars publish access to:
      bars
      orders
      categories
      drinkTypes
    Channels to grant bars only subscribe access to:
      private_channel
   */

  // removes the drinks channel from the bar's publish list
  var channelsToGrant = _.remove($channels, function(channel) {
    return !/(users)/g.test(channel);
  });

  // Grant bar access to their own private channel
  channelsToGrant.push(barId); // looks like 'auth0|####'

  // Grant bar access to their relevant channels
  _.forEach(channelsToGrant, function(channel) {
    $dispatcher.grant({
      channel: channel,
      read: true,
      write: true,
      ttl: 0,
      auth_key: user_id,
      callback: function() {
        $log(channel + 'grant to bar successful');
      }
    });
  });
};

// verify bar with bank info and stuff
actions.verify = function(params, $dispatcher, res) {
  var bankToken;
};

module.exports = actions;
