var express = require('express')
var router = express.Router()

const userController = require('../../app/http/controllers/user_controller')

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.destroy)

module.exports = router
