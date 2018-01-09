const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI);
const app = express();

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(5000);
