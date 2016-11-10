var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
// router.use('/categories', require('./category/categoryRoutes'));
// router.use('/questions', require('./question/questionRoutes'));

module.exports = router;
