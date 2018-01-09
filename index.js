const express = require('express');
const mongoose = require('mongoose');
// const keys = require('./config/keys')
require('./models/Product')
require('./services/seed')
require('./services/passport');



// connect to DB:
mongoose.connect("mongodb://foodie:foodie@ds247317.mlab.com:47317/foodie-dev", {
  useMongoClient: true
})
.then( function() {
  console.log('MongoDB Connected...');
})
.catch( function(err) {
  console.log(err);
});

const app = express();

// Load routes:
require('./routes/authRoutes')(app);

// // Map global promise - get rid of warning
// mongoose.Promise = global.Promise;





const PORT = process.env.PORT || 5000;
app.listen(PORT);
