const routes = require('express').Router()
const {UserController} = require('../controllers')

routes.get('/users', UserController.list)
routes.post('/login', UserController.login)
routes.post('/cadastro', UserController.cadastro)

module.exports = routes