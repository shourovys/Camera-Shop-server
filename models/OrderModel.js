const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    userId: String,
    email: String,
    phone: String,
    address: String,
    product: Object,
    status: {
      type: String,
      default: 'Pending',
    },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
