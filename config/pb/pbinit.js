'use strict';
// var PN = require('pubnub').init($config.secrets.pb);

function $Dispatcher(PubNub){
  var pb = PubNub || require('pubnub').init($config.secrets.pb);

  this.pub = function(message, channel) {
    message.from = $config.alias;
    message.to = 'mobile';
    console.log('about to publish');
    pb.publish({
      channel: channel,
      message: message,
      callback: function(){
        console.log('message sent ', message.to);
      }
    });
  };

  this.sub = function(channel, cb) {
    pb.subscribe({
      channel: channel,
      callback: function(message){
        console.log('in pbinit cb', cb.name);
        cb(message);
      },

      error: function(e) {
        console.log('error in pbninit', e);
      }
    });
  };

  this.grant = function(configs) {
    pb.grant(configs);
  };
}


global.$Dispatcher = $Dispatcher;
