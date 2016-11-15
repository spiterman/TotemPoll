var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./userController');
var auth = require('../../auth/auth');
var checkUser = [auth.decodeToken(), auth.getFreshUser()];


router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

// router.get('/', controller.getUser);

router.route('/signup')
  .get(controller.get)
  .post(auth.hashPassword(),  controller.signUp);

router.route('/signin')
  .post(controller.signIn);

// router.route('/:id')
//   .get(controller.getOne)
//   .put(checkUser, controller.put)
//   .delete(checkUser, controller.delete);

router.route('/:username')
  .get(controller.getUser);

module.exports = router;
