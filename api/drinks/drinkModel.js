'use strict';

var mongoose = require('mongoose');

var DrinksSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  ingredients: [{
    type: String
  }],

  category: String,

  bar: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'bar'
  },

  price: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model('drink', DrinksSchema);
