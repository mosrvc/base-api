var express = require('express');
var router = express.Router();

const userRoutes = require('./user_router')

/* GET users listing. */
router.use('/users', userRoutes);

module.exports = router;
