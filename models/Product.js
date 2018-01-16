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
  PromotionDescription: {
    type: String,
    required: false,
  },
  expiryDate: {
    type: String,
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
