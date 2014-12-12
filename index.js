//    Red Bull Vodka v0.0.1
//    (c) Sip 2014 Scott Moss, Daniel Liebieskin

    // Server Entry (index.js)
    // ------------------------------

'use strict';
// **NODE_ENV** default to development mode if not set elsewhere
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// **mongoose**  node module, use to connect to DB
var mongoose = require('mongoose');

// **http** module used to create a basic server. **Red Bull Vodka**  is a
// real time server using **PubNub**. It does not use http for any of its
// API features.
var http = require('http');

// Init all the globals in **globals.js**
require('./config/globals');

// Connect to the mongo Database, the URL is based off the **NODE_ENV**
mongoose.connect($config.mongo.uri, $config.mongo.options);

// If **seed** is true in the config file (based off **NODE_ENV**) then seed the
// db with all the data in **seed.js**
if ($config.seedDB) { require('./config/seed'); }

// Init **PubNub** and register channels
require('./config/pb/pbinit');

// Init all events for all channels
require('./api/events');

// Create basic server, not currently used
http.createServer(function(req, res) {
  res.end();
}).listen($config.port, $config.ip, function() {
  $log('on port', $config.port);
});
