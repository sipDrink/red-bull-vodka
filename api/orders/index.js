'use strict';

var actions = require('./orderActions');

module.exports = function($dispatcher) {

  $dispatcher.sub(__dirname, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    if (message.to === $config.alias && message.respondTo) {
      // for each action in the given message, invoke
      // the registered action with the given params
      _.forEach(message.actions, function(meta, actionName) {
        actions[actionName].call(actions, meta, $dispatcher, message.respondTo);
      });
    }

  });

};
