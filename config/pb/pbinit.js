'use strict';

var config = require('../env');
var globals = require('./globals');

var pb = require('pubnub').init(config.secrets.pb);


module.exports = pb;
