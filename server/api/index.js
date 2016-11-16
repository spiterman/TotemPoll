var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/questions', require('./question/questionRoutes'));
// router.use('/categories', require('./category/categoryRoutes'));

module.exports = router;
