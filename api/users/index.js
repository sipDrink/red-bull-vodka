'use strict';

var userEvents = require('./userEvents');
var _ = require('lodash');
var config = require('../../config/env');

module.exports = function(PN) {
  var _mainChannel;

  function getMainChannel() {
    return _mainChannel;
  }


  var userStream = {
    newPrivateChannel: function(user) {

      var grant = {
        channel: user.channel,
        auth_key: user.auth_key,
        read: true,
        write: true,
        ttl: 0
      };

      PN.grant(grant);
      _mainChannel = user.channel;

      var details = {
        channel: user.channel
      };

      PN.sub(details).then(function(message) {
        if (message.to === config.alias) {
          _.forEach(message.actions, function(args, action) {
            userEvents[action](PN, args, getMainChannel());
          });
        }
      });
    }
  };

  return userStream;
};
