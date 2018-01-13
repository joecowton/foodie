const mongoose = require('mongoose');
const Product = mongoose.model('products');
const TescoAPI = require("tesco-api-node");

const api = new TescoAPI("b251645b90664ac2bd23ab96dcb0089d");

module.exports = app => {

  app.get('/api/products/:search', function(req, res){

    var search = req.params.search
    var query = search == "default" ? "nestle" : search;
    console.log("Searching for  >>>> ", query)

    var options = {
      limit: 12,
      query: query
    }
    api.grocerySearch(options)
    .then((results) => {

      var tescoProducts = JSON.parse(results).uk.ghs.products.results;

      console.log("RESULTS>>>>>", tescoProducts);

  // app.get('/api/products', function(req, res){
  //   Product.find( {} )
  //     .sort( {expiryDate: 'desc'} )
  //     .then((products) => {
  //       res.json(products)
  //     })


      res.json(tescoProducts);

    })
    .catch((err) => {
      console.log(err);
    })
  });

  app.get('/api/products/categories/:category', function(req, res){
    Product.find({ category: req.params.category})
      .then((products) => {
        res.json(products)
      })
  })

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
