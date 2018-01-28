const mongoose = require('mongoose');
const Product = mongoose.model('products');
const User= mongoose.model('users');

module.exports = app => {
  app.post('/api/addwishlist', function(req, res){
    req.user.product_id.push(req.body.id);
    req.user.save();
    res.json(req.body.id)
  });

  app.post('/api/deleteitem', function(req, res){
    req.user.product_id.remove(req.body.id);
    req.user.save();
    res.json(req.user.product_id);
  });
}
