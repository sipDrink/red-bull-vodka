'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,

  barType: String,

  // bartenders: [
  //   {
  //     type: Schema.objectId,
  //     ref: 'bartender'
  //   }
  // ],

  email: {
    required: true,
    unique: true,
    index: true,
    type: String
  },

  // stock: {
  //   type: Schema.objectId,
  //   ref: 'stock'
  // },

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
      type: Schema.ObjectId,
      ref: 'drink'
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
