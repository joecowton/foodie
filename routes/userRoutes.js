const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middleware/require-login')

module.exports = app => {
  //earch by name
  app.get('/api/user/', function(req, res){
        console.log(req.user);
        res.send(req.user)
  });

  app.get('/api/user/preference/:preference', function(req, res){
    User.find({ preference: req.params.preference })
      .then(function(user) {
        res.json(user);
    });
  });

  app.put('/api/user/updateDiet/:diet'){
    var diet = req.params.diet
    User.findById({req.user.id}){
      .then(console.log(diet);)
    }
  }
}
