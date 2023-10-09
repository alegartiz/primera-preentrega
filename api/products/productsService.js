const fs = require('fs');
const productsData = require('./productsData.json');

const productsService = {
  getAllProducts: (limit) => {
    return productsData;
  },

  getProductById: (pid) => {
    return product;
  },

  addProduct: (productData) => {
    fs.writeFileSync('./api/products/productsData.json', JSON.stringify(productsData, null, 2));
  },

  updateProduct: (pid, updatedFields) => {
    fs.writeFileSync('./api/products/productsData.json', JSON.stringify(productsData, null, 2));
  },

  deleteProduct: (pid) => {
    fs.writeFileSync('./api/products/productsData.json', JSON.stringify(productsData, null, 2));
  },
};

module.exports = productsService;
