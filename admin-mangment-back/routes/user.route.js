const express = require('express')
const route = express.Router()
const userController = require ('../controller/user.controller')


route.get('/login',userController.login)


module.exports = route