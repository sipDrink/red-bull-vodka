'use strict';

var mongoose = require('mongoose');

var DrinksSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  bars: [{
    type: mongoose.Schema.ObjectId,
    ref: 'bar'
  }],

  bar_count: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model('drink', DrinksSchema);
