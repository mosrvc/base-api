var express = require('express')
var index = express.Router()
var apiRouter = require('./api/api_router')

/* GET home page. */
index.get('/', function (req, res, next) {
  res.render('index', { title: 'Base Moservice' })
})

index.use('/api', apiRouter)

module.exports = index
