'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');

module.exports = function(app, express){

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());
  // app.use(morgan('combined'));
  app.use(express.static(path.join(__dirname, '/../../client')));

  var profileRouter = express.Router();

  app.use('/api/profile', profileRouter);


  app.get('*', function(req, res){
    res.status(404);
  });

  require(__dirname + '/../profile/profileRoutes.js')(profileRouter);
};
