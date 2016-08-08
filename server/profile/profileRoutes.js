'use strict';

var profileHandler = require('./profileHandler.js');

module.exports = function(app){
  app.get('/', profileHandler.testGet);
  app.post('/testPost', profileHandler.testPost);
};
