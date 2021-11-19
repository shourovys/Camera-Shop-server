const express = require('express');
const {
  getProducts,
  createProducts,
  getProduct,
  deleteProduct,
} = require('../controllers/ProductsControllers');
const Admin = require('../Middleware/Admin');
const { auth } = require('../Middleware/Auth');

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.post('/', auth, Admin, createProducts);
productRouter.get('/:id', auth, getProduct);
productRouter.delete('/:id', auth, Admin, deleteProduct);

module.exports = productRouter;
