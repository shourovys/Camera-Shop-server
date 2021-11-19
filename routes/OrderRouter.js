const express = require('express');
const {
  getOrders,
  getUserOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require('../controllers/OrderController');

const { auth } = require('../Middleware/Auth');

const orderRouter = express.Router();

orderRouter.get('/', getOrders);
orderRouter.post('/', auth, createOrder);
orderRouter.get('/:id', auth, getUserOrder);
orderRouter.patch('/:id', auth, updateOrder);
orderRouter.delete('/:id', auth, deleteOrder);

module.exports = orderRouter;
