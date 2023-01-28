const express = require('express');
const Router = express.Router();

const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');
const commentValidation = require('../validations/commentValidation');

Router.post('/:idItem', authMiddleware.validateAuth, commentValidation.validateStore, commentController.store);

Router.delete('/:id', authMiddleware.validateAuth, commentController.destroy);

Router.get('/:itemId', commentController.findByItem);

module.exports = Router;
