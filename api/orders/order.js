'use strict';

var codeValidation = [

  function validator(val) {
    return /^[a-zA-Z0-9]/g.test(val) && val.length === 4;
  },

  'Oh snap! {PATH} must be 4 alphanumeric characters long'
];

var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({

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

  cost: {
    type: Number,
    required: true,
  },

  redeemed: {
    type: Boolean,
    default: false
  }

});

module.exports  = mongoose.model('order', OrderSchema);
