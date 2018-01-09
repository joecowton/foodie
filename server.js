var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('test');
});

app.get('/', function(request, response){
  response.send("Hello world")
});

server.listen(5000, function(){
  console.log("Server listening on port 5000");
});

module.exports = server;
