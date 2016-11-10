var User = require('./userModel');
var _ = require('lodash');
var signToken = require('../../auth/auth').signToken;
var bcrypt = require('bcrypt');
const saltRounds = 10;


exports.params = function(req, res, next, id) {
  User.findById(id)
    .select('-password')
    .exec()
    .then(function(user) {
      if(!user) {
        next(new Error('No user with that id'));
      } else {
        req.user = user;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  User.find({})
    .select('-password')
    .exec()
    .then(function(users) {
      res.json(users.map(function(user){
        return user.toJson();
      }));
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var user = req.user.toJson();
  res.json(user.toJson()); // Not sure about that
};

exports.put = function(req, res, next) {
  var user = req.user;
  var update = req.body;
  _.merge(user, update);

  user.save(function(err, saved) {
    if(err) {
      next(err);
    } else {
      res.json(saved.toJson());
    }
  });
};

exports.signIn = function(req, res, next) {
  User.find({username: req.body.username}, function(err, documents){
    if(err){
      next(err);
    } else {
      var user;
      documents.forEach((item) => {
        bcrypt.compare(req.body.password, item.password, function(err, success){
          if(err) { return next(err) }
            if(success){
              res.json(item);
            }
        });
      });
    };
  });
}

exports.signUp = function(req, res, next) {

  var newUser = new User(req.body);
  console.log(newUser);
  newUser.save(function(err, user) {
    if(err) {
      console.log(err);
      return next(err);
    }

    var token = signToken(user._id);
    res.json({token: token});
  });
};

exports.delete = function(req, res, next) {
  req.user.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed.toJson());
    }
  });
};

exports.me = function(req, res) {
  res.json(req.user.toJson());
};




