const express = require("express");
const router = express.Router();

const InsertOrder = require('../controllers/new_order')
const GetOrders = require('../controllers/get_orders')
const ConfirmOrder = require('../controllers/confirm_order')

router.post("/orders/insert", new InsertOrder().handler.bind(new InsertOrder));

router.get("/orders/get", new GetOrders().handler.bind(new GetOrders));

router.put("/orders/confirm", new ConfirmOrder().handler.bind(new ConfirmOrder));

module.exports = router;