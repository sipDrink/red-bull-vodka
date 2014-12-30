'use strict';

var codeValidation = [

  function validator(val) {
    return /^[a-zA-Z0-9]/g.test(val) && val.length === 4;
  },

  'Oh snap! {PATH} must be 4 alphanumeric characters long'
];

var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({

  drinks: [{
    type: mongoose.Schema.ObjectId,
    ref: 'drink',
    quantity: Number
  }],

  code: {
    type: String,
    required: true,
    validate: codeValidation
  },

  bar: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'bar'
  },

  customers: [{
    type: mongoose.Schema.ObjectId,
    ref: 'user'
  }],

//  cost: {
//    type: Number,
//    required: true
//  },

  // has the order been picked up by the customer?
  redeemed: {
    type: Boolean,
    default: false
  },

  // has the order been paid for by the customer?
  paidFor: {
    type: Boolean,
    default: false
  },

  // has the bar/bartender begun fulfilling the order?
  processed: {
    type: Boolean,
    default: false
  }
});

module.exports  = mongoose.model('order', OrderSchema);
