'use strict';

var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  number: Number
});

module.exports  = mongoose.model('order', OrderSchema);
