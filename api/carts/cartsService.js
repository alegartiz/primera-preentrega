
const fs = require('fs');
const cartsData = require('./cartsData.json');





const cartsService = {
  createCart: () => {
    const newCart = {
      id: generateUniqueId(),
      products: [],
    };
    cartsData.push(newCart);
    fs.writeFileSync('./api/carts/cartsData.json', JSON.stringify(cartsData, null, 2));
    return newCart;
  },





  getCartById: (cid) => {
    return cartsData.find((cart) => cart.id === cid);
  },





  addProductToCart: (cid, pid, quantity) => {
    const cart = cartsData.find((c) => c.id === cid);
    if (cart) {
      const existingProduct = cart.products.find((product) => product.id === pid);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ id: pid, quantity });
      }
      fs.writeFileSync('./api/carts/cartsData.json', JSON.stringify(cartsData, null, 2));
      return true;
    }
    return false;
  },
};



function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}





module.exports = cartsService;
