var User = require('../api/user/userModel');
var Question = require('../api/post/questionModel');
var Category = require('../api/category/categoryModel');

var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'John', password: 'test'},
  {username: 'Sergey', password: 'test'},
  {username: 'Jimmy', password: 'test'}
];

var categories = [
  {name: 'politics'},
  {name: 'coding'},
  {name: 'biology'}
];

var questions = [
  {title: 'Learn angular 2 today', text: 'Angular to is so dope'},
  {title: '10 reasons you should love IE7', text: 'IE7 is so amazing'},
  {title: 'Why we switched to Go', text: 'go is dope'}
];

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject){
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category] //, Question]
    .map(function(model){
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

var createUsers = function(data) {
  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    })
}

var createCategories = function(data) {
  var promises = categories.map(function(category) {
    return createDoc(Category, category);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({categories: categories}, data || {});
    });
};


cleanDB()
  .then(createUsers)
  .then(createCategories)
  // .then(createQuestions)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
