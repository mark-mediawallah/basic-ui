// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var clientSchema = new Schema({
  name: String,
  type: String,
  password: {type: String, required: true}
});

// the schema is useless so far
// we need to create a model using it
var Client = mongoose.model('Client', clientSchema);

// make this available to our clients in our Node applications
module.exports = Client;

