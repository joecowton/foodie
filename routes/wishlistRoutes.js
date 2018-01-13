const mongoose = require('mongoose');

module.exports = app => {
  app.post('/api/addwishlist', function(req, res){
    req.user.product_id.push(req.body.id);
    req.user.save();
  });
}
