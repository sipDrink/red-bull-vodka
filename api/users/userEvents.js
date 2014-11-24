'use strict';

var User = require('./userModel');
var Bar = require('../bars/barModel');
var _ = require('lodash');
var Q = require('q');

module.exports = {
  'get': function(values, channel) {
    console.log('getting');

    var findById = Q.nbind(User.findById, User);

    findById(values._id).then(function(user) {
      if (user) {
        $dispatcher.pub({
          channel: channel,
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

  'getBars': function(values, channel) {
    /*
      values:
      {
        longitude: String, {req}
        latitude: String, {req}
        maxDistance: String, {optional}  = max distance of geo query
        limit: String, {optional} = limit to how many to return
      }
    */

    console.log('get bars', values, channel);

    var coords = values.coords;
    var maxDistance = values.distance || 20; // miles

    var queryParams = {
      completedSignUp: true,
      loc: {
        $near: coords,
        $maxDistance: maxDistance
      }
    };



    var findBars = Bar.find(queryParams);

    if (values.limit) {
      findBars = findBars.limit(values.limit);
    }

    findBars.exec(function(err, bars) {
      if (err) {
        console.error(err);
        return;
      }

      $dispatcher.pub({
        actions: {
          'updateBars': bars
        }
      },
        { channel: channel }
      );

    });

  },

  'update': function(values){
    console.log('updating', values._id);
    var id = values._id;
    delete values._id;

    var findByIdAndUpdate = Q.nbind(User.findByIdAndUpdate, User);

    findByIdAndUpdate(id, values).then(function(user) {
      if (user) {
        console.log(user.name);
        $dispatcher.pub({
          message: {
            to: 'mobile',
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
