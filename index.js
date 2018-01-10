const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User')
require('./models/Product')

const app = express();

require('./services/seed')
require('./services/passport');
require('./services/mongoose');
require('./services/handlebars')(app);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]

  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/homepageRoutes')(app);
require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
