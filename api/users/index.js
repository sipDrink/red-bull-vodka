'use strict';

var actions = require('./userActions');

module.exports = function($dispatcher) {
  var channel = __dirname.split('/')[0];
  $log(channel);
  $dispatcher.sub(channel, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    $log('message', message);
    if (message.to === $config.alias && message.respondTo) {
      // for each action in the given message, invoke
      // the registered action with the given params
      _.forEach(message.actions, function(meta, actionName) {
        // check to see if the message is from Auth0 and is to register a new
        // user or bar
        if (message.register && message.from === 'Auth0') {
          actions.register(message.register, $dispatcher);
        } else {
          actions[actionName].call(actions, meta, $dispatcher, message.respondTo);
        }
      });
    }

  });

};
