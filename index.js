var http = require('http');
var pubKey = process.env.PUBNUB_PUBLISH_KEY || 'demo';
var sbKey = process.env.PUBNUB_SUBSCRIBE_KEY || 'demo';


var pb = require('pubnub').init({
  publish_key: pubKey,
  subscribe_key: sbKey
});

setInterval(function() {
  pb.publish({
    channel: 'sip',
    message: { code: 'theme streams' },
    callback: function(e){console.log('pubped')},
    error: function(e){console.log(e)}
  });
}, 5000);


http.createServer(function(req, res) {
  res.end();
}).listen(process.env.PORT || 4000);

console.log('on port', process.env.PORT || 4000);
