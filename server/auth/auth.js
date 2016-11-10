const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const config = require('../config/config');
const checkToken = expressJwt({secret: config.secrets.jwt });
const bcrypt = require('bcrypt');
const saltRounds = 1;

exports.hashPassword = function(){
  return function(req, res, next){
    var password = req.body.password;
    if(req.body.password){
      bcrypt.genSalt(saltRounds, function(err, salt){
        // Error Handling
        bcrypt.hash(password, salt, function(err, hash){
          // Error Handling
          req.body.password = hash;
          next();
        });
      });
    };
  };
};


exports.decodeToken = function(){
  return function(req, res, next) {
    console.log(req.query, 'This is the req query');
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }
    checkToken(req, res, next);
  };
};

exports.getFreshUser = function(){
  return function(req, res, next) {
    User.findById(req.user._id)
      .then(function(user){
        if(!user){
          res.status(401).send('Unauthorized');
        } else {
          req.user = user;
          next();
        }
      }, function(err){
        next(err);
      });
  }
};

exports.verifyUser = function(){
  return function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;

    if(!username || !password) {
      res.status(400).send('You need a username and password');
      return;
    }

    User.findOne({username: username})
      .then(function(user){
        if(!user) {
          res.status(401).send('No user with the given username');
        } else {
          if(!user.authenticate(password)) {
            res.status(401).send('Wrong password');
          } else {
            req.user = user;
            next();
          }
        }
      }, function(err) {
        next(err);
      });
  };
};

exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresIn: config.expireTime}
    );
  };

