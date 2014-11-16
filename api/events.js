'use strict';


module.exports = function(pb) {

  // setInterval(function() {
  //   pb.publish({
  //     channel: 'sip',
  //     message: { code: 'theme streams' },
  //     callback: function(e){console.log('pubped')},
  //     error: function(e){console.log(e)}
  //   });
  // }, 5000);

  pb.subscribe({
    channel: 'global-grant',
    message: function(data) {
      console.log(data);
      pb.publish({
        channel: 'sip',
        message: { message: 'yooo' },
        error: function(e){
          console.error('pub error', e);
        }
      });
    },
    error: function(e){
      console.error(e);
    }
  });
};
