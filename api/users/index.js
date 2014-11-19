'use strict';

var userEvents = require('./userEvents');
var _ = require('lodash');
var config = require('../../config/env');

module.exports = function(pb) {
  var _mainChannel;

  function getMainChannel() {
    return _mainChannel;
  }

  var PN = {
    pub: function(details) {
      details.message.from = config.alias;
      details.channel = details.channel || getMainChannel();
      details.callback = function() {
        console.log('pubbed to ', details.channel);
      };
      pb.publish(details);
    },

    sub: function(details) {
      pb.subscribe(details);
    }
  };

  var userStream = {
    newPrivateChannel: function(userChannel) {
      _mainChannel = userChannel;
      var details = {
        channel: userChannel,
        message: function(message) {
          if (message.to === config.alias) {
            _.forEach(message.actions, function(args, action) {
              userEvents[action](PN, args);
            });
          }
        }
      };
      PN.sub(details);
    }
  };

  return userStream;
};


// PN.subscribe({
  //   channel: channel,
  //   message: function(actions){
  //     _.forEach(actions, function(args, action) {
  //       console.log(action);
  //       userEvents[action](args, PN);
  //     });
  //   },
  //   error: function(e){
  //     console.error(e);
  //   }
  // });

  // PN.publish({
  //   channel: channel,
  //   message: { updated: 'yess sir' }
  // });
