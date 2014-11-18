'use strict';

var User = require('./userModel');
var _ = require('lodash');

module.exports = {
  'update': function(PN, values){
    console.log('updating', values._id);
    var id = values._id;
    delete values._id;

    User.findByIdAndUpdate(id, values, function(err, user) {
      if (err) {
        console.error(err);
      }

      if (user) {
        console.log(user.name);
        PN.publish({
          channel: 'private-'+user._id,
          message: {
            to: 'mobile',
            from: 'API',
            actions: {
              updated: {
                'user': user
              }
            }
          },

          callback: function() {
            console.log('published update to ' + user.name )
          }

        });
      }
    });
  }
};
