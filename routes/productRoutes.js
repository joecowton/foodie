const mongoose = require('mongoose');
const Product = mongoose.model('products');
const User = mongoose.model('users');

module.exports = app => {
  // app.get('/products', function(req, res){
  //   Product.find({})
  //     .sort({expiryDate: 'desc'})
  //     .then(function(products) {
  //       res.render('products/list', {
  //         products: products
  //       });
  //   });
  // });

  app.get('/api/products', function(req, res){
    Product.find({})
      .sort({expiryDate: 'desc'})
      .then(function(products) {
        res.json(products);

    });
  });

  app.get('/api/products/:title', function(req, res){
    Product.find({ title: req.params.title })
      .sort({expiryDate: 'desc'})
      .then(function(products) {
        res.json(products);
    });
  });

  app.get('/api/user/:name', function(req, res){
    User.find({ name: req.params.name })
      .then(function(user) {
        res.json(user);
    });
  });



//sends delete request remember not to test in google
  app.delete('/api/products/delete/:title', function(req, res){
    Product.remove({ title: req.params.title})
      .then(() => {
        console.log("deleted");
    });
  });

  // app.get('/', function(req, res){
  // 	Product.find({}, function(err, docs){
  // 		if(err) res.json(err);
  // 		else    res.render('index', {products: docs});
  // 	});
  // });

}
