const mongoose = require('mongoose');

module.exports = app => {
  app.post('/api/addwishlist', function(req, res){
    req.user.product_id.push(req.body.id);
    req.user.save();
    console.log(req.user);
  });

  app.post('/api/deleteitem', function(req, res){
    req.user.product_id.remove(req.body.id);
    req.user.save();
  });
}
