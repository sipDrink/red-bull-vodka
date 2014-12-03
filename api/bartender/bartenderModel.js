var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BartenderSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true
  },
  name: String,
  password: String,

  orders: [
    {
      type: Schema.ObjectId,
      ref: 'order'
    }
  ],

  referId: String,

  bar: {
    type: Schema.ObjectId,
    ref: 'bar'
  }
});

module.exports = mongoose.model('bartender', BartenderSchema);
