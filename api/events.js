'use strict';

module.exports = function() {
  // Note: this module is a function for future features
  // For each resource, create and new $Dispatcher instance
  _.forEach($channels, function(resource) {
    require('./' + resource)(new $Dispatcher());
  });
};
