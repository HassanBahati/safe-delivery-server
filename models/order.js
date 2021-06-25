const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    pickUp: {
        type: String,
        required: [true, "Please provide pickUp"],
      },
      deliverTo: {
        type: String,
        required: [true, "Please provide deliverTo"],
      },
      weight: {
        type: Number,
        required: [true, "Please provide weight"],
      },
  });


const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
