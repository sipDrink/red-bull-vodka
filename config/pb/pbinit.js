'use strict';

var config = require('../env');
var pb = require('pubnub').init(config.secrets.pb);
var q = require('q');

var dispatcher = {
  pub: function(message, setup) {
    message.from = config.alias;
    console.log('about to publish');
    pb.publish({
      channel: setup.channel,
      message: message,
      callback: function(){
        console.log('message sent ', message.to);
      }
    });
  },

  sub: function(channel) {
    console.log('about to sub');
    var future = q.defer();
    pb.subscribe({
      channel: channel,
      callback: function(message){
        console.log(message);
        future.resolve(message);
      },
      error: function(e) {
        future.reject(e);
      }
    });

    return future.promise;
  },

  grant: function(configs) {
    pb.grant(configs);
  }
};

module.exports = dispatcher;
