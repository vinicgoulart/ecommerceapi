const express = require('express');
const Router = express.Router();

const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const itemValidation = require('../validations/itemValidation');

Router.get('/', itemController.index);

Router.post('/', authMiddleware.validateAuth, adminMiddleware.verifyAdmin, itemValidation.validateStore, itemController.store);

Router.get('/:id', itemController.findOne);

Router.delete('/:id', authMiddleware.validateAuth, adminMiddleware.verifyAdmin, itemController.destroy);

Router.put('/:id', authMiddleware.validateAuth, adminMiddleware.verifyAdmin, itemValidation.validateUpdate, itemController.update);

Router.get('/like-item/:id', authMiddleware.validateAuth, itemController.likeItem);

module.exports = Router;
