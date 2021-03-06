// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Task = require('../models/task');

// Routes
Task.methods(['get', 'put', 'post', 'delete']);
Task.register(router, '/tasks');

// Return router
module.exports = router;