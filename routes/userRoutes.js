const mongoose = require('mongoose');
const User = mongoose.model('users');
const requireLogin = require('../middleware/require-login')

module.exports = app => {
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


  app.put('/api/user/updateDiet/', function(req, res){
    console.log(req.body);
    User.findById(req.user._id, (err, user) => {
        user.diet = req.body.diet || user.diet;
        user.save(function(err, task){
          if(err) return res.status(500).send(err);
          res.status(200).json(user.diet);
        })
    })
  })

}
