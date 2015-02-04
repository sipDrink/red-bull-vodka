'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarSchema = new Schema({
  private_channel: String,

  name: String,

  barType: String,

  bartenders: [{
    type: Schema.ObjectId,
    ref: 'bartender'
  }],

  email: {
    required: true,
    unique: true,
    index: true,
    type: String
  },

  // SOON TO BE DEPRECATED
  // these are alcoholic drinks (separated by category)
  drinkTypes: [{
    // name: String,
    // price: Number,
    // category: String
    type: Schema.ObjectId,
    ref: 'drinkType'
  }],

  // SOON TO BE DEPRECATED
  // non-alcoholic drinks (a separate category)
  drinkMixers: [{
    name: String,
    price: Number
  }],

  // specialty drinks (a separate category)
  drinks: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: [String],
    category: {
      type: String
      // required: true
    }
  }],

  password: {
    type: String,
    required: true
  },

  completedSignUp: {
    type: Boolean,
    default: false
  },

  loc: {
    type: [Number],
    index: '2d'
  },

  address: {
    street: String,
    extra: String,
    city: String,
    zip: Number
  },

  orders: [{
    type: Schema.ObjectId,
    ref: 'order'
  }],

  description: String,

  merchPath: String,

  accountToken: String,

  completedSignup: {
    type: Boolean,
    deafult: false
  }

});

module.exports =  mongoose.model('bar', BarSchema);
