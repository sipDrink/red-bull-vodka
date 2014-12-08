'use strict';

var actions = require('../createActions')(User);


actions.register = function(auth_key, $dispatcher) {
  $log('registering');
  /*
    Channels to grant users access to
      users
      orders
      bars
  */
  var channelsToGrant = _.remove($channels, function(channel) {
    return !/(categories|drinks)/g.test(channel);
  });

  // Make sure to grant user access to their own private channel
  channelsToGrant.push(auth_key);

  $log('channelsToGrant', channelsToGrant);
  // Actually grant the users channels
  _.forEach(channelsToGrant, function(channel) {
    $dispatcher.grant({
      channel: channel,
      read: true,
      write: true,
      ttl: 0,
      auth_key: auth_key,
      callback: function() {
        $log(channel + ' grant successful');
      }
    });
  });
};

module.exports = actions;
