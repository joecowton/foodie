const mongoose = require('mongoose');
require ('../models/User')
const User = mongoose.model('users');
const Product = mongoose.model('products');

// let test = new User();

module.exports = app => {
  app.post('/api/addwishlist', function(req, res){

    console.log("BEFORE wishlist",req.user.wishlist);
    console.log("USER",req.user);
    console.log("PRODUCT ID",req.body.id);

    req.user.product_id.push(`${req.body.id}`);
    // user.wishlist.push(req.user)
    console.log("after wishlist",req.user.product_id);
  });
}
