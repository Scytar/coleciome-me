const express = require("express");
const router = express.Router();

const NewTrade = require('../controllers/new_trade')
const GetUserTrades = require('../controllers/get_user_trades')
const GetPublicTrades = require('../controllers/get_public_trades')
const ShowTotalItems = require('../controllers/show_total_items')
const ShopCard = require('../controllers/shop_card')

router.post("/trades/new_trade", new NewTrade().handler.bind(new NewTrade));

router.get("/trades/get_user_trades", new GetUserTrades().handler.bind(new GetUserTrades));

router.get("/trades/get_public_trades", new GetPublicTrades().handler.bind(new GetPublicTrades));

router.get("/card/show_total_items", new ShowTotalItems().handler.bind(new ShowTotalItems));

router.post("/card/shop_card", new ShopCard().handler.bind(new ShopCard));

module.exports = router;