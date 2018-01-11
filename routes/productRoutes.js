const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = app => {
  app.get('/api/products', function(req, res){
    Product.find({})
      .sort({expiryDate: 'desc'})
      .then(function(products) {
        products.forEach(function(product){
          res.json(product)
        })
    });
  });

  // app.get('/api/products', function(req, res){
  //   Product.find({})
  //     .sort({expiryDate: 'desc'})
  //     .then(function(products) {
  //       products.forEach(function(product){
  //         if (product.expiryDate.toLocaleDateString() > new Date().toLocaleDateString())
  //           {
  //             console.log(product)
  //             res.json(product)
  //           }
  //       })
  //   });
  // });
  app.get('/api/products/categories/:category', function(req, res){
    Product.find({ category: req.params.category})
      .then((products) => {
        res.json(products)
      })
  } )


  app.delete('/api/products/delete/:title', function(req, res){
    Product.remove({ title: req.params.title })
      .then(() => {
        console.log("deleted");
    });
  });

  app.get('/api/products/:title', function(req, res){
    Product.find({ title: req.params.title })
      .sort({expiryDate: 'desc'})
      .then(function(products) {
        res.json(products);
    });
  });

//sends delete request remember not to test in google
  app.delete('/api/products/delete/:title', function(req, res){
    Product.remove({ title: req.params.title})
      .then(() => {
        console.log("deleted");
    });
  });
}
