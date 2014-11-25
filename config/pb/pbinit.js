'use strict';
// var PN = require('pubnub').init($config.secrets.pb);

function $Dispatcher(PubNub){
  var pb = PubNub || require('pubnub').init($config.secrets.pb);

  this.pub = function(message, channel) {
    message.from = $config.alias;
    message.to = 'mobile';
    pb.publish({
      channel: channel,
      message: message,
      callback: function(){
        $log('message sent to ' + message.to);
      }
    });
  };

  this.sub = function(channel, cb) {
    pb.subscribe({
      channel: channel,
      callback: cb,
      error: function(e) {
        $log('error in pbninit', e);
      }
    });
  };

  this.grant = function(configs) {
    pb.grant(configs);
  };
}


global.$Dispatcher = $Dispatcher;
