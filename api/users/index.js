'use strict';

var actions = require('./userActions');

module.exports = function($dispatcher) {
  var channel = __dirname.split('/').pop();

  $dispatcher.sub(channel, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    if (message.to === $config.alias && message.respondTo) {

      if (message.register && message.from === 'Auth0') {
        // registers the user to their appropriate channels
        actions.register(message.register, $dispatcher);
      }

      // for each action in the given message, invoke
      // the registered action with the given params (meta)
      _.forEach(message.actions, function(meta, actionName) {
        // check to see if the message is from Auth0 and is to register a new
        // user or bar
        actions[actionName].call(actions, meta, $dispatcher, message.respondTo);
      });
    }

  });

};
