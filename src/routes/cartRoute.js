const express = require('express');
const Router = express.Router();

const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');
const cartValidation = require('../validations/cartValidation');

Router.get('/', cartController.retrieveOneCart);

Router.post('/add-cart/:idItem', authMiddleware.validateAuth, cartValidation.validateCreate, cartController.addItemtoCart);

Router.delete('/remove-item/:idCart', authMiddleware.validateAuth, cartController.removeItemfromCart);

Router.delete('/delete-cart/:idCart', authMiddleware.validateAuth, cartController.destroy);

module.exports = Router;
