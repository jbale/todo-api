// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://app:todoapp@ds031117.mongolab.com:31117/todo');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = Number(process.env.PORT || 3000)
app.listen(port);
console.log('API is running on port 3000');


