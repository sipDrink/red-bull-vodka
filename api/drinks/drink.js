'use strict';

var mongoose = require('mongoose');

var DrinksSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  ingredients: [
    { type: String }
  ],

  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'category',
    required: true
  },

  bar: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'bar'
  }

});

module.exports = mongoose.model('drink', DrinksSchema);
