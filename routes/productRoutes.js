const mongoose = require('mongoose');

module.exports = app => {
  app.get('/api/products', function(req, res){
    Product.find( {} )
      .sort( {expiryDate: 'desc'} )
      .then((products) => {
        res.json(products)
      })

  });

  app.get('/api/products/categories/:category', function(req, res){
    Product.find({ category: req.params.category})
      .then((products) => {
        res.json(products)
      })
  })


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

  // async function test() {
    // await

  // }
  //
  // var user = new User({googleID:"1232432", name: 'eh'});
  // console.log("HEHREHREHHE",user)
  //
  // // console.log('RODUUCUCUT', product)
  // // product.save();
  // user.wishlist.push( new Product({
  //   title: 'testfood',
  //   quantity: '10',
  //   price: '10.50',
  //   category: 'Vodka tonight'
  // }))
  // console.log("wishlist user", user)
  // user.save();
}
