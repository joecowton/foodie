const express = require('express');
require('./services/passport');

const app = express(); //setup configuration to listen to incoming requests that are being
                      //routed to express side of app from node side and route
                      // request to route handlers. -> all route handlers will be associated
                      //with app object






const PORT = process.env.PORT || 5000
app.listen(PORT);
