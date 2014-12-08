'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/env');
var mongoose = require('mongoose');
var http = require('http');


require('./config/globals');
mongoose.connect(config.mongo.uri, config.mongo.options);

if (config.seedDB) { require('./config/seed'); }

/* Init pubnub and register channels */
require('./config/pb/pbinit');
require('./api/events')();

http.createServer(function(req, res) {
  res.end();
}).listen(config.port, config.ip, function() {
  console.log('on port', config.port);
});

