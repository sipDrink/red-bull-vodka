var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DrinkTypeSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  bar: {
    type: Schema.ObjectId,
    ref: 'bar'
  },

  brands: [{
    name: String,
    price: Number
  }]

});

module.exports = mongoose.model('drinkType', DrinkTypeSchema);
