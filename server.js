var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var session = require('express-session');
// var config = require('./config');

var port = 4000;

var app = module.exports = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('connected on ', port)
});
