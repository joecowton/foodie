const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Product Schema
const ProductSchema = new Schema({
  id:{
    type: Number,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  UnitQuantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  },
  expiryDate: {
    type: Date,
    required: true
  },
  image: {
    mime: String,
    bin: Buffer
  },
  category: {
    type: String,
    required: true,
  }
});
mongoose.model('products', ProductSchema);
