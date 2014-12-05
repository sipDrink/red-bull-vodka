'use strict';

function $Dispatcher(PubNub){
  var pb = PubNub || require('pubnub').init($config.secrets.pb);
  var that = this;
  this.pub = function(message, channel) {
    message.from = $config.alias;
    message.to = 'mobile';
    pb.publish({
      channel: channel,
      message: message,
      callback: function(){
        $log('message sent to ' + message.to);
      },
      error: function(error) {
        $handleError(error, "PUB Error");
        that.retryQueue.push({message: message, channel: channel});
      }
    });
  };

  this.sub = function(channel, cb) {
    pb.subscribe({
      channel: channel,
      callback: cb,
      error: function(e) {
        $handleError(e)
      }
    });
  };

  this.grant = function(configs) {
    pb.grant(configs);
  };

  this.retryQueue = [],
  this.repub = function() {
    var what = this.retryQueue.pop();
    if (what) {
      setTimeout(function() {
        this.pub()
      }.bind(this), 200);
    }
  };
}

/** @global */
global.$Dispatcher = $Dispatcher;
