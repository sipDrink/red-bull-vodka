'use strict';

var actions = require('./barActions');

module.exports = function($dispatcher) {
  var channel = __dirname.split('/').pop();

  $dispatcher.sub(channel, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    if (message.to === $config.alias && message.respondTo) {
      // for each action in the given message, invoke
      // the registered action with the given params (meta)
      _.forEach(message.actions, function(meta, actionName) {
        actions[actionName].call(actions, meta, $dispatcher, message.respondTo);
      });
    }

  });

};
