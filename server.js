var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var keys = require('./config/keys')

mongoose.connect(keys.mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('test');
});

app.get('/', function(request, response){
  response.send("Hello world")
});

app.get('/auth/google', function(request, response){
  response.send("hello");
});




server.listen(5000, function(){
  console.log("Server listening on port 5000");
});

module.exports = server;
