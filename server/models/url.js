// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var urlSchema = new Schema({
    clientId: Number,
    url: String,
    thumbnail: Object,
    status: String,
    priority: Number
});

// the schema is useless so far
// we need to create a model using it
var Url = mongoose.model('Url', urlSchema);

// make this available to our clients in our Node applications
module.exports = Url;