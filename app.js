var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movies'); //routes are defined here
var app = express(); //Create the Express app
var config = require('./config');
mongoose.connect(config.db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); // static content
app.use('/api', movies); //This is our route middleware
module.exports = app;
