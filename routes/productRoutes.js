const mongoose = require('mongoose');
const Product = mongoose.model('products');
const TescoAPI = require("tesco-api-node");
const api = new TescoAPI("e4a394ac2c5741da8007d5e98ffb93af");

module.exports = app => {
  app.get('/api/products', function(req, res){
    Product.find( {} )
      .sort( {expiryDate: 'asc'} )
      .then((products) => {
        res.json(products)
      })
  });

  app.get('/api/products/price/ascending', function(req, res){
    Product.find( {} )
      .sort( {price: 'asc'} )
      .then((products) => {
        res.json(products)
      })
  });

  app.get('/api/products/:search', function(req, res){
    var search = req.params.search
    var query = search == "default" ? "nestle" : search;
    console.log("Searching for  >>>> ", query)

    var options = {limit: 12, query: query}

    api.grocerySearch(options)
      .then((results) => {
        var tescoProducts = JSON.parse(results).uk.ghs.products.results;
        console.log("RESULTS>>>>>", tescoProducts);
        res.json(tescoProducts);
      })
      .catch((err) => {
        console.log(err);
    })
  });

  app.get('/api/products/price/decending', function(req, res){
    console.log(req.query.category);
    Product.find( {} )
      .sort( {price: 'desc'} )
      .then((products) => {
        res.json(products)
      })
  });

  app.get('/api/products/categories/:category', function(req, res){
    Product.find({ category: req.params.category})
      .then((products) => {
        res.json(products)
      })
  });

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
}
