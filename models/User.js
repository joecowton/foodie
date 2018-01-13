const mongoose = require('mongoose');
const products = mongoose.model('products');
require('./Product')
// const Schema = mongoose.Schema;  same as line below
const { Schema } = mongoose;
// comment
const userSchema = new Schema({
  googleID: String,
  name: {
    type: String
  },
  email: {
    type: String
  },
  image: {
    type: String
  },
  diet: {
    type: String,
    default: 'none'
  },
  created_at: {
    type: Number
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'products'
  }]
});

mongoose.model('users', userSchema);
