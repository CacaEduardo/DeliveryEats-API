const routes = require('express').Router()

const {UserController, FoodController, OrderController, PartnersController} = require('../controllers')


routes.post('/user', UserController.create)
routes.post('/doLogin', UserController.doLogin)
routes.get('/food', FoodController.read)
routes.get('/food/favorites', FoodController.readFavorites)
routes.get('/order/user/:user_id', OrderController.readByUserId)
routes.post('/order', OrderController.create)
routes.get('/partners', PartnersController.read)

module.exports = routes