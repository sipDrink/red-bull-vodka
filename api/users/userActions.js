'use strict';

var User = require('./userModel');

var actions = require('../createActions')(User);

actions.register = function(auth_key, $dispatcher) {
  $dispatcher.grant({
    read: true,
    write: true,
    ttl: 0,
    auth_key: auth_key
  });
};

module.exports = actions;
