const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/Product')
const Product = mongoose.model('products');
require('./services/seed')
require('./services/passport');



// connect to DB:
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
})
.then( function() {
  console.log('MongoDB Connected...');
})
.catch( function(err) {
  console.log(err);
});

const app = express();

// Home page route.
// app.get('/', function (req, res) {
//   res.send('Wiki home page');
// })


app.get('/', function(req, res){
	Product.find({}, function(err, docs){
		if(err) res.json(err);
		else    res.render('index', {products: docs});
	});
});

// app.get('/', function(req, res){
//   var all = Product.find({})
//   // console.log(all)
//   .then(function(products) {
//     res.render('products/index', {
//       products: products
//     });
//   });
// });

// app.get('/', function(req, res){
//   Product.find({})
//   console.log(products)
//   .then(function(products) {
//     res.render('products/index', {
//       products: products
//     });
//   });
// });
// Load routes:
require('./routes/authRoutes')(app);

// // Map global promise - get rid of warning
// mongoose.Promise = global.Promise;





const PORT = process.env.PORT || 5000;
app.listen(PORT);
