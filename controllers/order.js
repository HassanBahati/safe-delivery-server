const Order = require('../models/order')
//ROUTES
//gets all orders
exports.returnAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
};

//post submits an order
exports.addOneOrder = async (req, res) => {
  const order = new Order({
    name: req.body.name,
    pickUp: req.body.pickUp,
    deliverTo: req.body.deliverTo,
    weight: req.body.weight,
  });
  try {
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    res.json({ message: err });
  }
};

//get a specific order
exports.returnOneOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete specifc order
exports.deleteOneOrder = async (req, res) => {
  try {
    const removedOrder = await Order.remove({ _id: req.params.orderId });
    res.json(removedOrder);
  } catch (err) {
    res.json({ message: err });
  }
};

//update an order
exports.updateOneOrder = async (req, res) => {
  try {
    const updatedOneOrder = await Order.updateOne(
      { _id: req.params.orderId },
      
      { $set: { deliverTo: req.params.deliverTo } }
    );
    res.json(updatedOneOrder);
  } catch (err) {
    res.json({ message: err });
  }
};
