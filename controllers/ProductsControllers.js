const Product = require('../models/ProductModel');

const ProductsControllers = {};

ProductsControllers.getProducts = async (req, res) => {
  try {
    let products;
    if (req.query.limited === 'true') {
      products = await Product.find().limit(6);
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

ProductsControllers.getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

ProductsControllers.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

ProductsControllers.createProducts = async (req, res) => {
  try {
    const { userId } = req;

    const newProducts = new Product({ userId, ...req.body });

    const saveProducts = await newProducts.save();

    res.status(201).json(saveProducts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = ProductsControllers;
