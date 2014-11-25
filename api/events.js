'use strict';

var fs = require('fs');
// Array of different resource names read from this directory
// ex: ['bars', 'drinks']
var channels = fs.readdirSync(__dirname);

channels = _.remove(channels, function(file) {
  // remove any files, only folders
  return !/.js/g.test(file);
});

$log(channels);

global.$channels = channels;

module.exports = function() {
  // For each resource, create and new $Dispatcher instance
  _.forEach(channels, function(resource) {
    require('./' + resource)(new $Dispatcher());
  });
};
