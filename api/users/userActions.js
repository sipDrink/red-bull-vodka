'use strict';

var User = require('./userModel');

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

  // Make sure to grant user access to their own private user
  channelsToGrant.push(auth_key);

  $log(channelsToGrant);
  // Actually grant the users channels
  _.forEach(channelsToGrant, function(channel) {
    $log(channel + ' granted');
    $dispatcher.grant({
      channel: channel,
      read: true,
      write: true,
      ttl: 0,
      auth_key: auth_key
    });
  });

channelsToGrant.splice(channelsToGrant.length -1, 1);

  $dispatcher.pub({
    actions: {
      'receiveUser': {channels: channelsToGrant}
    }
  }, auth_key);
};

module.exports = actions;
