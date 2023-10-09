const express = require('express');
const productsController = require('./productsController');

const productsRouter = express.Router();

// ###########################




productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:pid', productsController.getProductById);
productsRouter.post('/', productsController.addProduct);
productsRouter.put('/:pid', productsController.updateProduct);
productsRouter.delete('/:pid', productsController.deleteProduct);

module.exports = productsRouter;
