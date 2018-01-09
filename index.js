const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/Product')
const Product = mongoose.model('products');
require('./services/seed')
require('./services/passport');


const app = express();


// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

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


//--- MIDDLEWARE : ---

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');




// Home page route
app.get('/', function (req, res) {
  res.send('Wiki home page');
})


// app.get('/', function(req, res){
// 	Product.find({}, function(err, docs){
// 		if(err) res.json(err);
// 		else    res.render('index', {products: docs});
// 	});
// });


// Fetch all database objects:

app.get('/products', function(req, res){
  Product.find({})
    .sort({date: 'desc'})
    .then(function(products) {
      res.render('products/list', {
        products: products
      });
  });
});


require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);
