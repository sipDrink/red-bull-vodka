'use strict';

var Bar = require('./barModel');
var Drink = require('../bars/barModel');
var actions = require('../createActions')(Bar);

// overwrite the default 'get' action for the 'bars' channel
// we must do a double nested population

actions.get = function(params, $dispatcher, res) {
  var options = {
    limit: 20
  };

  _.extend(options, params.options || {});

  var search = _.extend({}, params.query || {});

  var query = Bar.find(search);

  _.forEach(options, function(args, option) {
    query = query[option](args);
  });

  query.exec(function(err, results) {
    if (err) {
      $log(err);
      return;
    }

    Drink.populate(results, { path: 'drinks.category' }).exec(function(err, res) {
      var message = {
        actions: {}
      };

      $log('Got results from get:bars', res);
      message.actions[res.action] = results;
      $dispatcher.pub(message, res.channel);
    })
  });
};

module.exports = actions;

