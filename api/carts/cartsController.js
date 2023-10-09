const cartsService = require('./cartsService');

const cartsController = {
  createCart: (req, res) => {
    const cart = cartsService.createCart();
    res.json(cart);
  },

  
  getCartById: (req, res) => {
    const { cid } = req.params;
    const cart = cartsService.getCartById(cid);
    res.json(cart);
  },

  
  
  
  addProductToCart: (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const success = cartsService.addProductToCart(cid, pid, quantity);
    if (success) {
      res.json({ message: 'Product added to cart successfully' });
    } else {
      res.status(404).json({ error: 'Product or cart not found' });
    }
  },
};




module.exports = cartsController;
