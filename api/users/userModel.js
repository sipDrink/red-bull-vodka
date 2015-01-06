'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,

  gender: String,

  auth_0_Id: String,

  email: {
    index: true,
    unique: true,
    required: true,
    type: String
  },

  picture: String,

  cards: [{
    name: String,
    cardType: String,
    href: String,
    main: {
      type: Boolean,
      default: false
    }
  }],

  auth_key: {
    type: String,
    required: true
  },

  favorites: {
    global: {
      name: String,
      custom: {}
    },
    bar: [{
      type: Schema.ObjectId,
      ref: 'bar'
    }]
  },

  provider: {
    facebook: {
      id: String,
      access_token: String
    }
  },

  orders: [{
    type: Schema.ObjectId,
    ref: 'orders'
  }]

});

UserSchema.statics.findOneOrCreateOne = function(query, maybe) {
  if (!query) {
    throw Error('Must have a query');
  }

  if (typeof query !== 'object') {
    throw Error('Query must be an object');
  }

  if (!maybe) {
    throw Error('You must pass in an user just in case');
  }

  var future = $q.defer();
  var User = mongoose.model('user');

  User.findOne(query, function(err, user) {
    if (err) {
      return future.reject(err);
    }

    if (user && !_.isEmpty(user)) {
      return future.resolve(user);
    }

    User.create(maybe, function(err, user) {
      if (err) {
        future.reject(err);
      } else {
        future.resolve(user);
      }
    });
  });
  return future.promise;
};

module.exports = mongoose.model('user', UserSchema);
