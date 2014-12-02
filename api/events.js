'use strict';

module.exports = function() {
  // For each resource, create and new $Dispatcher instance
  _.forEach($channels, function(resource) {
    require('./' + resource)(new $Dispatcher());
  });
};
