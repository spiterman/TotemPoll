var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserQJoinSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },

  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'question'
  }

});

module.exports = mongoose.model('userQJoin', UserQJoinSchema);
