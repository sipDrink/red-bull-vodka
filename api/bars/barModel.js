var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarSchema = new Schema({
  name: String,

  email: {
    required: true,
    unique: true,
    index: true,
    type: String
  },

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
  }

});

module.exports =  mongoose.model('bar', BarSchema);
