var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  name: String,
  someID: String,
  facebookId: String
});


module.exports = mongoose.model('users', User);
