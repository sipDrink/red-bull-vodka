'use strict';

_.forEach($channels, function(resource) {
  require('./' + resource)(new $Dispatcher());
});
