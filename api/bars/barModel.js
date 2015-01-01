'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,

  barType: String,

  bartenders: [
    {
      type: Schema.ObjectId,
      ref: 'bartender'
    }
  ],

  email: {
    required: true,
    unique: true,
    index: true,
    type: String
  },

//  email_verified: {
//    // required: true,
//    type: Boolean
//  },

  drinkTypes: [
    {
      type: Schema.ObjectId,
      ref: 'drinkType'
    }
  ],

  drinkMixers: [
    {
      name: String,
      price: Number
    }
  ],

  password: {
    type: String,
    required: true
  },

  completedSignUp: {
    type: Boolean,
    default: false
  },

  drinks: [
    {
      name: String,
      price: Number,
      ingredients: [String]
    }
  ],

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

  orders: [
    {
      type: Schema.ObjectId,
      ref: 'order'
    }
  ]

});

module.exports =  mongoose.model('bar', BarSchema);
