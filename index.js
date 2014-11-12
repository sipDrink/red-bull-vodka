'use strict';

var config = require('./config/env');
var mongoose = require('mongoose');
var http = require('http');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

mongoose.connect(config.mongo.uri, config.mongo.options);

if (config.seedDB) { require('./config/seed'); }

/* Init pubnub and register channels */
require('./api/events')(require('./pb/pbinit'));


// var pb = require('pubnub').init({
//   publish_key: pubKey,
//   subscribe_key: sbKey
// });

// setInterval(function() {
//   pb.publish({
//     channel: 'sip',
//     message: { code: 'theme streams' },
//     callback: function(e){console.log('pubped')},
//     error: function(e){console.log(e)}
//   });
// }, 5000);


http.createServer(function(req, res) {
  res.end();
}).listen(config.port, config.ip, function() {
  console.log('on port', config.port);
});

