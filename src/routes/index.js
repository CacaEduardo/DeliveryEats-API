const routes = require('express').Router()
const {UserController} = require('../controllers')
const {FoodController} = require('../controllers')
const {OrderController} = require('../controllers')

routes.post('/user', UserController.create)
routes.post('/doLogin', UserController.doLogin)
routes.get('/food', FoodController.read)
routes.get('/food/favorites', FoodController.readFavorites)
routes.get('/order/user/:user_id', OrderController.readByUserId)
routes.post('/order', OrderController.create)

module.exports = routes