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

  // these are alcoholic drinks (separated by category)
  drinkTypes: [{
    name: String,
    price: Number,
    category: String
  }],

  // non-alcoholic drinks (a separate category)
  drinkMixers: [{
    name: String,
    price: Number
  }],

  // specialty drinks (a separate category)
  drinks: [{
    name: String,
    price: Number,
    ingredients: [String]
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
  }]

});

module.exports =  mongoose.model('bar', BarSchema);
