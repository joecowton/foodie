var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var keys = require('./config/keys')
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI);
var app = express();
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('test');
// });


app.use(passport.initialize());
app.use(passport.session());




require('./routes/authRoutes')(app);

app.listen(5000);
