'use strict';

var actions = require('./orderActions');

module.exports = function($dispatcher) {
  var channel = __dirname.split('/').pop();

  $dispatcher.sub(channel, function(message) {
    // Make sure the message is for the API server,
    // without this check, the server could be reacting
    // to its own publishes meant for mobile
    $log('message:', message);
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
        "bar": "54a1f4e7595f8d0200ce3a01",
        "drinks": [
          {
            "name": "Taaka Shots",
            "price": "50",
            "ingredients": ["Taaka"],
            "quantity": 2
          }
        ],
        "customers": [
          "54ac3b8e02b6b7c42590f599"
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

 {"from":"mobile","to":"API","actions":{"order":{"order":{"bar":"54ac3ddb9be4603303d26114","drinks":[{"name":"Taaka Shots","price":"50","ingredients":["Taaka"],"quantity":3}],"customers":["54ac3ddb9be4603303d26113"],"status":"paidFor"}}},"respondTo":{"action":"receiveBars","channel":""}}

 */

// Sample message from Manhattan for updating the status of an order:
/*
message = {
  "from": "vendor",
  "to": "API",
  "actions": {
    "updateOrder": {

      "orderInfo": {
        "_id": "54aaf010f9b42bdd13803889",
        "status": "redeemed"
      }

    }
  },
  "respondTo": {
    "action": "",
    "channel": ""
  }
}
 */
