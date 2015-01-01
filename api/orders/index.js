'use strict';

var actions = require('./orderActions');

module.exports = function($dispatcher) {
  var channel = __dirname.split('/').pop();

  $dispatcher.sub(channel, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    $log('message');
    if (message.to === $config.alias && message.respondTo) {
      // for each action in the given message, invoke
      // the registered action with the given params
      _.forEach(message.actions, function(meta, actionName) {
        actions[actionName].call(actions, meta, $dispatcher, message.respondTo);
      });
    }

  });

};
// Sample message from Patron for placing an order:
/*
message = {
  "from": "mobile",
  "to": "API",
  "actions": {
    "order": {

      "order": {
        "bar": {
          "_id": "54a1f4e7595f8d0200ce3a01",
          "merch": '',
          "private_channel": "auth0|54a21ac37302a1d301cdb354"
        },
        "drinks": [
          {
            "_id": "54a1f4e5595f8d0200ce3679",
            "quantity": 2
          }
        ],
        "customers": [
          {
            "name": "Sunny"
          }
        ],
        "status": "paidFor"
      }

    }
  },
  "respondTo": {
    "action": "receiveBars",
    "channel": ""
  }
}
*/
