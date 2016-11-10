var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
    // required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },

  bio: String,

  zipCode: Number

});

module.exports = mongoose.model('user', UserSchema);
