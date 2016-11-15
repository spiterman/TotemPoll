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
