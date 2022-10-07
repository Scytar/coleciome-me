const express = require("express");
const router = express.Router();

const InsertOrder = require('../controllers/orders/new_order')
const GetOrders = require('../controllers/orders/get_orders')
const ConfirmOrder = require('../controllers/orders/confirm_order')

router.post("/orders/insert", new InsertOrder().handler.bind(new InsertOrder));
//userid -> integer
//valueToAddToWallet -> real

router.get("/orders/get", new GetOrders().handler.bind(new GetOrders));
//userid -> integer
//orderStatus -> ['confirmed','awaiting payment','canceled']
router.put("/orders/confirm", new ConfirmOrder().handler.bind(new ConfirmOrder));

module.exports = router;