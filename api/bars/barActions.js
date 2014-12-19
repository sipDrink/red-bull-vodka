'use strict';
var actions = require('../createActions')(Bar);

actions.register = function(auth_key, $dispatcher) {
  $log('registering bar');
  /*
    Channels to grant bars publish access to:
      bars
      orders
      categories
      drinkTypes
   */
//  var channelsToGrant = $channels.slice();

  var channelsToGrant = _.remove($channels, function(channel) {
    return !/drinks/g.test(channel);
  });

  // Grant bar access to their own private channel
  channelsToGrant.push(auth_key);

  // Grant bar access to their relevant channels
  _.forEach(channelsToGrant, function(channel) {
    $dispatcher.grant({
      channel: channel,
      read: false,
      write: true,
      ttl: 0,
      auth_key: auth_key,
      callback: function() {
        $log(channel + 'grant to bar successful');
      }
    });
  });
};

module.exports = actions;
