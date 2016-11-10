var Comment = require('./commentModel');
var _ = require('lodash');
var signToken = require('../../auth/auth').signToken;

exports.post = function(req, res, next) {
  var newComment = new Comment(req.body);
  newComment.save(function(err, comment){
    if(err) {return next(err);}
    var token = signToken(user._id);
    res.json({token: token});
  });
};
