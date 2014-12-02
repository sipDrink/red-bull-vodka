/*
  All globals go here
*/
var fs = require('fs');
// Array of different resource names read from this directory
// ex: ['bars', 'drinks']
var channels = fs.readdirSync(__dirname);

global.$channels = _.remove(channels, function(file) {
  // remove any files, only folders
  return !/.js/g.test(file);
});

$log($channels);

global._ = require('lodash');
global.$q = require('q');
global.$config = require('./env');

global.$log = $config.logging ? console.log : function(){};
global.$handleError = function(error, meta) {
  // handle this right here hard
  console.log(error, meta);
};

_.forEach($channels, function(channel) {
  var directory = channel;
  if (/ies\b/g.test(channel)) {
    channel = channel.replace(/ies\b/g, 'y');
  }

  if (channel[channel.length - 1] === 's') {
    channel = channel.slice(0, channel.length - 1);
  }

  channel = channel.toUpperCase();
  var pathToModel = '../api/' + directory + '/' + channel + 'Model';
  global[channel] = require(pathToModel);
});
