const mongoose = require('mongoose');
const products = mongoose.model('products');

const { Schema } = mongoose;

const wishlistItemSchema = new Schema({
  name: String
})

mongoose.model('wishlistItem', wishlistItemSchema);
