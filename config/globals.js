/*
  All globals go here
*/

global._ = require('lodash');
global.$q = require('q');
global.$config = require('./env');

global.$log = $config.logging ? console.log : function(){};
