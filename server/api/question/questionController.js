var Question = require('./questionModel');
var _ = require('lodash');

exports.get = function(req, res, next){
  Question.find({})
    .then(function(questions){
      res.json(questions.map(function(question){
        return question.toJson();
      }));
    }, function(err){
      next(err);
    });
};

exports.post = function(req, res, next){
  // Find userID
  var question = new Question({question: req.body.question, description: req.body.description})
  question.save();
  console.log(req.body);
  res.send('question posted!');
  // var question = new Question()

}
