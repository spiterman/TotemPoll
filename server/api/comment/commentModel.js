var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },

  question: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'question'
  },

  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('comment', CommentSchema);
