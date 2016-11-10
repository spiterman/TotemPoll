// Set up Express app
var express = require('express');
var app = express();

// Load Modules
var api = require('./api');
var config = require('./config/config');
var logger = require('./util/logger');
var auth = require('./auth/routes');

// Database Setup
var mongoose = require('mongoose');
// mongoose.connect(config.db.url);

// Global Middleware
require('./middleware/appMiddleware')(app);

// API Setup
app.use('/api', api);
app.use('/auth', auth);

// Global Error Handling
app.use(function(err, req, res, next) {
  if(err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }
  logger.error(err.stack);
  res.status(500).send('Oops');
});

// Export App (For Testing)
module.exports = app;

