// $Dispatcher (config/pb/pbinit.js)
// -----------------------------------------------

'use strict';
// **$Dispatcher** constructor function
// initializes `PubNub` object with stuff in `$config`
//
// **@params**
// `{PubNub}`: pass in a new PubNub object | optional
function $Dispatcher(PubNub){
  this.pb = PubNub || require('pubnub').init($config.secrets.pb);
}

// **$Dispatcher.proto.pub**
// abstraction function used to call `PubNub.publish`
// **@params**
//
// `{message}`: the message to publish, will always send to mobile and from `$config.alias`
// `{channel}`:  the channel to publish to
$Dispatcher.prototype.pub = function(message, channel, cb) {
  message.from = $config.alias;
  message.to = message.to || 'mobile';

  cb = cb || function(){
    $log('message sent to ' + message.to);
  };

  this.pb.publish({
    channel: channel,
    message: message,
    callback: cb,
    error: function(error) {
      $handleError(error, "PUB Error");
    }
  });
};

$Dispatcher.prototype.multiPub = function(messages) {
  if (!_.isArray(messages)) {
    return;
  }

  _.forEach(messages, function(message) {
    this.pub(message.message, message.channel);
  }.bind(this));
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

$Dispatcher.prototype.grant = function(configs) {
  this.pb.grant(configs);
};

$Dispatcher.prototype.oneByOnePub = function(messages, channels) {
  _.forEach(messages, function(message) {
    this.pub(message, channels);
  }.bind(this));
};

global.$Dispatcher = $Dispatcher;
