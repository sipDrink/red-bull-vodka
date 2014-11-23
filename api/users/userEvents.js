'use strict';

var User = require('./userModel');
var Bar = require('../bars/barModel');
var _ = require('lodash');
var Q = require('q');

module.exports = {
  'get': function(PN, values) {
    console.log('getting');

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

  'getBars': function(PN, values, channel) {
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
    var lon = values.longitude;
    var lat = values.lat;

    var coords = [lon, lat];
    var maxDistance = values.distance || 20; // miles

    var queryParams = {
      near: coords,
      maxDistance: maxDistance
    };

    if (values.limit) {
      queryParams.limit = values.limit;
    }

    Bar.geoSearch({ completedSignup: true }, queryParams, function(err, bars) {
      if (err) {
        console.log(err);
        return;
      }

      PN.pub({
        actions: {
          'updateBars': bars
        }
      },
      { channel: channel }
      );
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
        PN.pub({
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
