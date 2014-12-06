'use strict';

function $Dispatcher(PubNub){
  $log($config.secrets)
  this.pb = PubNub || require('pubnub').init($config.secrets.pb);
  this.retryQueue = [];

  this.repub = function() {
    var what = this.retryQueue.pop();
    if (what) {
      setTimeout(function() {
        this.pub();
      }.bind(this), 200);
    }
  };
}

$Dispatcher.prototype.pub = function(message, channel) {
  message.from = $config.alias;
  message.to = 'mobile';

  this.pb.publish({
    channel: channel,
    message: message,
    callback: function(){
      $log('message sent to ' + message.to);
    },
    error: function(error) {
      $handleError(error, "PUB Error");
      // that.pub(message, channel);
    }
  });
};

$Dispatcher.prototype.sub = function(channel, cb) {
  this.pb.subscribe({
    channel: channel,
    callback: cb,
    error: function(e) {
      $handleError(e);
    }
  });
};

$Dispatcher.prototype.gant = function(configs) {
  this.pb.grant(configs);
};

$Dispatcher.prototype.onByOnePub = function(messages, channels) {
  _.forEach(messages, function(message) {
    this.pub(message, channels);
  }.bind(this));
};
/** @global */
global.$Dispatcher = $Dispatcher;
