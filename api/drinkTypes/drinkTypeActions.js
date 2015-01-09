'use strict';


var actions = require('../createActions')(DrinkType);

actions.deleteDrink = function(params, $dispatcher, res) {

};

actions.addDrink = function(params, $dispatcher, res) {
  var addDrink = $q.nbind(Bar.update, Bar);

  addDrink({ _id: params.drinkInfo.bar }, { $push: { "drinks": params.drinkInfo.drink }})
    .then(function(bar) {
      $log('bar data:', bar);
    })
};

actions.editDrink = function(params, $dispatcher, res) {

};

module.exports = actions;

// Sample message from Manhattan for creating a new drinkType
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