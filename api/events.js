'use strict';


module.exports = function(pb) {

  setInterval(function() {
    pb.publish({
      channel: 'sip',
      message: { code: 'theme streams' },
      callback: function(e){console.log('pubped')},
      error: function(e){console.log(e)}
    });
  }, 5000);

};
