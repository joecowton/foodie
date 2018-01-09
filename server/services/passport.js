const passport = require('passport'); // handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; //instruct passport on how to authenticate users
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID, //identifies our application to google servers
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    }
  )
); // new instance of google passport strategy. ->
//want to authenticate my users with google. inside of constructor configuration
// how to authenticate users inside of application.
//passport.use -> knows how to handle authentication but not with a specific service
