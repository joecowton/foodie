const passport = require('passport'); //requiring original passport npm module


module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { //'google' is an internal identifier that tells passport to use google strategy
    scope: ['profile', 'email'] // what access we want to have inside user's profile
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

}
