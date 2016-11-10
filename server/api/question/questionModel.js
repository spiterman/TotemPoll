var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },

  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'category'
  }],

  content: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('question', QuestionSchema);
