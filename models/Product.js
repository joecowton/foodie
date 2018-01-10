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
  dateAdded: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date,
    required: true
  },
  // image: {
  //   type: 

  // }
  
});
mongoose.model('products', ProductSchema);
