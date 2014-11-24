'use strict';

var User = require('./userModel');

var actions = require('../createActions')(User);

actions.register = function(auth_key, channel, $dispatcher) {
  $log('registering');
  $dispatcher.grant({
    channel: channel,
    read: true,
    write: true,
    ttl: 0,
    auth_key: auth_key
  });
};

module.exports = actions;
