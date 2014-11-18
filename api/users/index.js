'use strict';

var userEvents = require('./userEvents');
var _ = require('lodash');
var config = require('../../config/env');

module.exports = function(pb) {
  var userStream = {
    pub: function(details) {
      details.message.from = config.alias;
      details.callback = function() {
        console.log('pubbed to ', config.channel);
      };
      pb.publish(details);
    },

    sub: function(details) {
      pb.subscribe(details);
    },

    newPrivateChannel: function(userChannel) {
      var details = {
        channel: userChannel,
        message: function(message) {
          if (message.to === config.alias) {
            _.forEach(message.actions, function(args, action) {
              userEvents[action](pb, args);
            });
          }
        }
      };

      userStream.sub(details);
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
