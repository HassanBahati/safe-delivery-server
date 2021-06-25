const express = require("express");
const router = express.Router();
const {
  addOneOrder,
  returnAllOrders,
  returnOneOrder,
  updateOneOrder,
  deleteOneOrder,
} = require("../controllers/order");

//add order
router.route("/").post(addOneOrder);

//get all orders
router.route("/").get(returnAllOrders);

//get single order
router.route("/:orderId").get(returnOneOrder);

//update single order
router.route("/:orderId").put(updateOneOrder);

//delete order
router.route("/:orderId").delete(deleteOneOrder);

module.exports = router;
