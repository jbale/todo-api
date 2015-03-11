
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var taskSchema = new mongoose.Schema({
    name: String,
    done: Boolean
});

// Return model
module.exports = restful.model('Task', taskSchema);
