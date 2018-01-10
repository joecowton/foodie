const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = app => {
  app.get('/products', function(req, res){
    Product.find({})
      .sort({date: 'desc'})
      .then(function(products) {
        res.render('products/list', {
          products: products
        });
    });
  });

  app.get('/api/products', function(req, res){
    Product.find({})
      .sort({date: 'desc'})
      .then(function(products) {
        res.json(products);
    });
  });

  app.get('/', function(req, res){
  	Product.find({}, function(err, docs){
  		if(err) res.json(err);
  		else    res.render('index', {products: docs});
  	});
  });

}
