const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('camera', productSchema);

module.exports = Product;
