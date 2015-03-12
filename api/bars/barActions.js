'use strict';
var actions = require('../createActions')(Bar);

actions.register = function(barId, $dispatcher) {
  $log('registering bar');
  /*
    Channels to grant bars publish access to:
      bars
      orders
      categories
      drinkTypes
    Channels to grant bars only subscribe access to:
      private_channel
   */

  // removes the drinks channel from the bar's publish list
  var channelsToGrant = _.remove($channels, function(channel) {
    return !/(users)/g.test(channel);
  });

  // Grant bar access to their own private channel
  channelsToGrant.push(barId); // looks like 'auth0|####'

  // Grant bar access to their relevant channels
  _.forEach(channelsToGrant, function(channel) {
    $dispatcher.grant({
      channel: channel,
      read: true,
      write: true,
      ttl: 0,
      auth_key: user_id,
      callback: function() {
        $log(channel + 'grant to bar successful');
      }
    });
  });
};

actions.updateBar = function(params, $dispatcher, res) {
  var updateBar = $q.nbind(Bar.findByIdAndUpdate, Bar);

  $log('the info is ' + params.barInfo.theInfo);

  if (params.barInfo.theInfo) {
    updateBar(params.barInfo.bar, params.barInfo.theInfo)
      .then(function (bar) {
        // $log('bar doc:', bar);
        var theBar = bar;
        $log('bar is ' + bar);

        var messageToVendor = {
          "to": "vendor",
          "actions": {}
        };

        messageToVendor.actions[res.action] = theBar;
        $dispatcher.pub(messageToVendor, res.channel);
      })
      .fail(function (err) {
        $handleError(err);
      });
  }
};

// verify bar with bank info and stuff
actions.verify = function(params, $dispatcher, res) {
  var bankToken;
};

module.exports = actions;
