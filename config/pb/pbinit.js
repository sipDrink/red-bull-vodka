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

  sub: function(channel, cb) {
    pb.subscribe({
      channel: channel,
      callback: function(message){
        console.log('in pbinit cb');
        cb(message)
      },
      error: function(e) {
        console.log(e);
      }
    });
  },

  grant: function(configs) {
    pb.grant(configs);
  }
};

global.$dispatcher = dispatcher;
