'use strict';

var User = require('./userModel');
var _ = require('lodash');
var Q = require('q');

module.exports = {
  'get': function(PN, values) {
    console.log('getting', values);
    var findById = Q.nbind(User.findById, User);

    findById(values._id).then(function(user) {
      if (user) {
        PN.pub({
          message: {
            to: 'mobile',
            actions: {
              'updateMe': user
            }
          }
        });
      }
    })
    .fail(function(err) {
      console.error(err);
    });
  },

  'update': function(PN, values){
    console.log('updating', values._id);
    var id = values._id;
    delete values._id;

    var findByIdAndUpdate = Q.nbind(User.findByIdAndUpdate, User);

    findByIdAndUpdate(id, values).then(function(user) {
      if (user) {
        console.log(user.name);
        PN.publish({
          channel: 'private-'+user._id,
          message: {
            to: 'mobile',
            from: 'API',
            actions: {
              updateMe: user
            }
          },

          callback: function() {
            console.log('published update to ' + user.name );
          }

        });
      }
    });
  }
};
