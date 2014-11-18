'use strict';

var User = require('mongoose').model('user');
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

        PN.publish({
          channel: 'private-'+id,
          message: {
            to: 'mobile',
            actions: {
              updated: {
                'user': user
              }
            }
          }
        });
      }
    });
  }
};
