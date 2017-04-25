var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var session = require('express-session');
// var config = require('./config');

var port = 4000;

var app = module.exports = express();
// var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());


// app.get('/home', productsController.getHome);

app.listen(port, function(){
  console.log('connected on ', port)
});
