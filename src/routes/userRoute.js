const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const userValidation = require('../validations/userValidation');

Router.get('/', userController.index);

Router.put('/update-status/:id', authMiddleware.validateAuth, adminMiddleware.verifyAdmin, userController.updateAdmin);

Router.put('/change-nickname/:id',  authMiddleware.validateAuth, userValidation.validateNickname, userController.updateNickname);

Router.delete('/delete-user/:id', authMiddleware.validateAuth, userController.destroy);

Router.get('/:id', authMiddleware.validateAuth, userController.listOne);

module.exports = Router;
