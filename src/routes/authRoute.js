const express = require('express');
const Router = express.Router();

const authController = require('../controllers/authController');
const authValidation = require('../validations/authValidation');
const authMiddleware = require('../middlewares/authMiddleware');

Router.post('/register', authValidation.verifyRegister, authController.register);

Router.post('/login', authValidation.verifyLogin, authController.login);

Router.post('/change-password', authValidation.changePassword, authController.change_pass);

Router.get('/auth-info', authMiddleware.validateAuth, authController.returnInfo );

Router.get('/logout', authController.logout);

module.exports = Router;
