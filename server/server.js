'use strict'

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
var middleware = require('./config/middleware');

middleware(app, express);

server.listen(port, function(){
  console.log('Server listening on ', port);
})

