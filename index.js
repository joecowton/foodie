const express = require('express');
const passport = require('passport');

require('./models/User')
require('./models/Product')

const app = express();

require('./services/passport');
require('./services/mongoose');
require('./services/handlebars')(app);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/homepageRoutes')(app);
require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
