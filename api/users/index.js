'use strict';

var userEvents = require('./userEvents');
var _ = require('lodash');
var config = require('../../config/env');

module.exports = function() {
  var _mainChannel;

  function getMainChannel() {
    return _mainChannel;
  }


  var userStream = {
    newPrivateChannel: function(user) {
      console.log('granting');
      var grant = {
        channel: user.channel,
        auth_key: user.auth_key,
        read: true,
        write: true,
        ttl: 0
      };

      $dispatcher.grant(grant);
      _mainChannel = user.channel;

      $dispatcher.sub(_mainChannel).then(function(message) {
        if (message.to === config.alias) {
          _.forEach(message.actions, function(args, action) {
            userEvents[action](args, getMainChannel());
          });
        }
      })
      .fail(function(err) {
        console.log('sub error', err);
      });
    }
  };

  return userStream;
};
