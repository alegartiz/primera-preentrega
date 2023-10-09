const productsService = require('./productsService');

const productsController = {
  getAllProducts: (req, res) => {
    const products = productsService.getAllProducts(req.query.limit);
    res.json(products);
  },

  getProductById: (req, res) => {
    const product = productsService.getProductById(req.params.pid);
    res.json(product);
  },

  addProduct: (req, res) => {
    const productData = req.body;
    productsService.addProduct(productData);
    res.json({ message: 'Product added successfully' });
  },

  updateProduct: (req, res) => {
    const { pid } = req.params;
    const updatedFields = req.body;
    productsService.updateProduct(pid, updatedFields);
    res.json({ message: 'Product updated successfully' });
  },

  deleteProduct: (req, res) => {
    const { pid } = req.params;
    productsService.deleteProduct(pid);
    res.json({ message: 'Product deleted successfully' });
  },
};

module.exports = productsController;
