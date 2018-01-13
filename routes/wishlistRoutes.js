const mongoose = require('mongoose');
const User = mongoose.model('users');
const Product = mongoose.model('products');



module.exports = app => {
  app.post('/api/addwishlist', function(req, res){
    console.log(req.body.name);
  });
}
