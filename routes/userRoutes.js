const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  // search by name
  app.get('/api/user/name/:name', function(req, res){
    console.log(req.params.name);
    User.find({ name: req.params.name })
      .then(function(user) {
        res.json(user);
    });
  });

  app.get('/api/user/preference/:preference', function(req, res){
    User.find({ preference: req.params.preference })
      .then(function(user) {
        res.json(user);
    });
  });
}
