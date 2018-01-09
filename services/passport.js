var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var mongoose = require('mongoose');
var keys = require('../config/keys');
var User = mongoose.model('users');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id })
      .then((existingUser) => {
        if(existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id })
          .save()
          .then(user => done(null, user))
        }
      })
    })
);
