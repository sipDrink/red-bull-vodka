'use strict';

var actions = require('../createActions')(User);


actions.register = function(user_id, $dispatcher) {
  $log('registering');
  /*
    Channels to grant users publish access to
      users
      orders
      bars
  */
  var channelsToGrant = _.remove($channels, function(channel) {
    return !/(categories|drinks)/g.test(channel);
  });

  // Make sure to grant user access to their own private channel
  channelsToGrant.push(user_id); // looks like 'facebook|####'

  // Actually grant the users channels
  _.forEach(channelsToGrant, function(channel) {
    $dispatcher.grant({
      channel: channel,
      read: true,
      write: true,
      ttl: 0,
      auth_key: user_id,
      // TODO: check to see if patron should set auth_key to access_token or user_id
      callback: function() {
        $log(channel + ' grant successful');
      }
    });
  });
};

module.exports = actions;
