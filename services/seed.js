const mongoose = require('mongoose');
const keys = require('../config/keys');

const Product = mongoose.model('products');


new Product({
  title: 'Food',
  quantity: '10',
  price: '10.50'
}).save();
