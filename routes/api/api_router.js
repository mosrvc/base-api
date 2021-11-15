var express = require('express');
var router = express.Router();

const userRoutes = require('./users')

/* GET users listing. */
router.use('/users', userRoutes);

module.exports = router;