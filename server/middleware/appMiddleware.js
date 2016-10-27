var express = require('express')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var override = require('method-override');
var path = require('path');

// Global Middleware
module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
  // Static Files
  app.use(express.static(path.join(__dirname, '/../../client')));
};
