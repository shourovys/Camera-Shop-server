const mongoose = require('mongoose');
const Order = require('../models/OrderModel');

const OrderController = {};
OrderController.getOrders = async (req, res) => {
  try {
    const allServices = await Order.find();

    res.status(200).json(allServices);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

OrderController.getUserOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const services = await Order.find({ userId: id });

    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

OrderController.createOrder = async (req, res) => {
  try {
    const { userId } = req;

    const newServices = new Order({ ...req.body, userId });

    const saveServices = await newServices.save();

    res.status(201).json(saveServices);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

OrderController.updateOrder = async (req, res) => {
  const { id } = req.params;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    const data = await Order.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.json(data);
  }
};
OrderController.deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await Order.findByIdAndRemove(id);
  res.json({ message: 'Services deleted successfully.' });
};

module.exports = OrderController;
