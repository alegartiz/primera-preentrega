const express = require('express');
const productsRouter = require('./api/products/productsRouter'); // checkear rutas antes de entregar!!!!
const cartsRouter = require('./api/carts/cartsRouter'); 

const app = express();
const PORT = 8080;

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
