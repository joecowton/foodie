const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')


require('./models/Product')
require('./models/User')

const app = express();

require('./services/passport');
require('./services/mongoose');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

require('./routes/authRoutes')(app);
require('./routes/homepageRoutes')(app);
require('./routes/productRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/wishlistRoutes')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT);
