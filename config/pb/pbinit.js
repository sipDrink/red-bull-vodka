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
    console.log('about to sub');
    pb.subscribe({
      channel: channel,
      callback: cb,
      error: function(e) {
        console.error(e);
      }
    });
  },

  grant: function(configs) {
    pb.grant(configs);
  }
};

global.$dispatcher = dispatcher;
