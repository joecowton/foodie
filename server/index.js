const express = require('express');
const passport = require('passport'); // handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //instruct passport on how to authenticate users
const keys = require('./config/keys');
const app = express(); //setup configuration to listen to incoming requests that are being
                      //routed to express side of app from node side and route
                      // request to route handlers. -> all route handlers will be associated
                      //with app object

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID, //identifies our application to google servers
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, accessToken => {
    console.log(accessToken);
    }
  )
); // new instance of google passport strategy. ->
//want to authenticate my users with google. inside of constructor configuration
// how to authenticate users inside of application.
//passport.use -> knows how to handle authentication but not with a specific service




app.get(
  '/auth/google',
  passport.authenticate('google', { //'google' is an internal identifier that tells passport to use google strategy
     scope: ['profile', 'email'] // what access we want to have inside user's profile
  })
);

app.get({
  'auth/google/callback',
  passport.authenticate('google')
});


const PORT = process.env.PORT || 5000
app.listen(PORT);
