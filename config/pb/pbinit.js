'use strict';

var config = require('../env');

var pb = require('pubnub').init(config.secrets.pb);

module.exports = pb;
