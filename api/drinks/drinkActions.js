'use strict';

var actions = require('../createActions')(Drink);

actions.addDrink = function(params, $dispatcher, res) {
  var addDrink = $q.nbind(Bar.findByIdAndUpdate, Bar);

  if (params.drinkInfo.drink && params.drinkInfo.drink.name !== '') {
    addDrink(params.drinkInfo.bar, {$push: {"drinks": params.drinkInfo.drink}})
    addDrink(params.drinkInfo.bar, {$set: {"name": "Dans Bar"}})
      .then(function (bar) {
        // $log('bar doc:', bar);
        var drink = bar.drinks[bar.drinks.length - 1];

        var messageToVendor = {
          "to": "vendor",
          "actions": {}
        };

        messageToVendor.actions[res.action] = drink;
        $dispatcher.pub(messageToVendor, res.channel);
      })
      .fail(function (err) {
        $handleError(err);
      });
  }
};

actions.deleteDrink = function(params, $dispatcher, res) {
  var findBar = $q.nbind(Bar.findById, Bar);

  findBar(params.drinkInfo.bar)
    .then(function(bar) {
      var saveBar = $q.nbind(bar.save, bar);
      var drink = bar.drinks.id(params.drinkInfo.drink._id);
      drink.remove();
      return saveBar();
    })
    .then(function() {
      var messageToVendor = {
        "to": "vendor",
        "actions": {}
      };

      messageToVendor.actions[res.action] = params.drinkInfo.drink;
      $dispatcher.pub(messageToVendor, res.channel);
    })
    .fail(function(err) {
      $handleError(err);
    });
};

actions.editDrink = function(params, $dispatcher, res) {
  var findBar = $q.nbind(Bar.findById, Bar);

  findBar(params.drinkInfo.bar)
    .then(function(bar) {
      var saveBar = $q.nbind(bar.save, bar);
      var drink = bar.drinks.id(params.drinkInfo.drink._id);
      drink.remove();
      bar.drinks.push(params.drinkInfo.drink);
      return saveBar();
    })
    .then(function() {
      var messageToVendor = {
        "to": "vendor",
        "actions": {}
      };

      messageToVendor.actions[res.action] = params.drinkInfo.drink;
      $dispatcher.pub(messageToVendor, res.channel);
    })
    .fail(function(err) {
      $handleError(err);
    });

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
    "action": "addDrinkToView",
    "channel": "private_channel"
  }
}
 */