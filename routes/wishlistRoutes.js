const mongoose = require('mongoose');
require ('../models/User')
const User = mongoose.model('users');
const Product = mongoose.model('products');

module.exports = app => {
  app.post('/api/addwishlist', function(req, res){
    req.user.product_id.push(req.body.id);
    req.user.save();
  });
}
