const express = require('express');
const cartsController = require('./cartsController');

const cartsRouter = express.Router();

cartsRouter.post('/', cartsController.createCart);
cartsRouter.get('/:cid', cartsController.getCartById);
cartsRouter.post('/:cid/product/:pid', cartsController.addProductToCart);

module.exports = cartsRouter;
