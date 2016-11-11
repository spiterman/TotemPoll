require('dotenv').load();
var config = require('./server/config/config');
var app = require('./server/server.js');
var logger = require('./server/util/logger');

app.listen(config.port);
console.log('Server listening on http://localhost:' + config.port)
// logger.log('Server listening on http://localhost:' + config.port);


