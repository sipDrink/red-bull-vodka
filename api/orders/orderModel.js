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
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: [{
      type: String
    }],
    quantity: Number
  }],

  code: {
    type: String,
    // required: true,
    validate: codeValidation
  },

  bar: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'bar'
  },

  // TODO: ADD CUSTOMERS TO DB BEFORE TESTING THIS FUNCTIONALITY
//  customers: [{
//    type: mongoose.Schema.ObjectId,
//    ref: 'user'
//  }],

  /*
  Possible values for status:
    '' - invalid
    'paidFor' - drink paid for but not made
    'processed' - drink made but not picked up
    'redeemed' - drink picked up by customer. 
  */
  status: {
    type: String,
    default: ''
  }

});

module.exports  = mongoose.model('order', OrderSchema);
