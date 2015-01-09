'use strict';

var actions = require('../createActions')(Drink);

actions.deleteDrink = function(params, $dispatcher, res) {

};

actions.addDrink = function(params, $dispatcher, res) {
  // could be made better by using actions.update, needs more thought

  var addDrink = $q.nbind(Bar.update, Bar);

  addDrink({ _id: params.drinkInfo.bar }, { $push: { "drinks": params.drinkInfo.drink }})
    .then(function(updateStatus) {
      if (updateStatus[0] === 0) {
        // maybe throw an error to the fail block
        $log('there was an error updating the bar\'s drinks');
      } else {
        $log('bar update status:', updateStatus);
      }
    })
};

actions.editDrink = function(params, $dispatcher, res) {

};

module.exports = actions;

// Sample message from Manhattan for creating a new drink and adding it to the bar document
/*
message = {
  "from": "vendor",
  "to": "API",
  "actions": {
    "addDrink": {

      "drinkInfo": {
        "bar": "54a1f4e7595f8d0200ce3a01",
        "drink": {
          "name": "Taaka",
          "price": 50,
          "category": "Vodka",
        },
      }

    }
  },
  "respondTo": {
    "action": "receiveBars",
    "channel": ""
  }
}
 */