var router = require('express').Router();
var controller = require('./questionController');

router.route('/')
  .get(controller.get)
  .post(controller.post);

module.exports = router;
