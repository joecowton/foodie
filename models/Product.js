const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Product Schema
const ProductSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
mongoose.model('products', ProductSchema);
