var http = require('http');
var pb = require('pubnub');

http.createServer(function(req, res) {
  res.end();
}).listen(process.env.PORT || 4000);

console.log('on port', process.env.PORT || 4000);
