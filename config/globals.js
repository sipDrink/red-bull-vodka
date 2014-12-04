/*
  All globals go here
*/

var fs = require('fs');
var colors = require('colors');
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};


global._ = require('lodash');
global.$q = require('q');
global.$config = require('./env');

global.$log = $config.logging ? console.log : function(){};
global.$handleError = function(error, meta) {
  // handle this right here hard
  console.log(error, meta);
};

// Array of different resource names read from this directory
// ex: ['bars', 'drinks']
var channels = fs.readdirSync(__dirname + '/../api');

global.$channels = _.remove(channels, function(file) {
  // remove any files, only folders
  return !/.js/g.test(file);
});

$log('--- Channels ---'.bold.cyan);
_.forEach($channels, function(channel) {
  var message = '** ' + channel + ' **';
  $log(message.underline.green);
});

_.forEach($channels, function(channel) {
  var directory = channel;

  if (/ies\b/g.test(channel)) {
    channel = channel.replace(/ies\b/g, 'y');
  }

  if (channel[channel.length - 1] === 's') {
    channel = channel.slice(0, channel.length - 1);
  }

  var pathToModel = '../api/' + directory + '/' + channel + 'Model';
  channel = channel.capitalize();
  global[channel] = require(pathToModel);
});
