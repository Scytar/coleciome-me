const express = require("express");
const router = express.Router();

const NewTrade = require('../controllers/trades/new_trade')
const GetUserTrades = require('../controllers/trades/get_user_trades')
const GetPublicTrades = require('../controllers/trades/get_public_trades')
const BuyCardOffer = require('../controllers/cards/buy_card_offer')
const AnswerCardOffer = require('../controllers/cards/answer_card_offer')
const RefuseCardOffer = require('../controllers/cards/refuse_card_offer')
const AcceptCardOffer = require('../controllers/cards/accept_card_offer')
const ShowTotalItems = require('../controllers/cards/show_total_items')
const ShopCard = require('../controllers/cards/shop_card')
const DailyCollect = require('../controllers/cards/daily_collect')

router.post("/trades/new_trade", new NewTrade().handler.bind(new NewTrade));

router.get("/trades/get_user_trades", new GetUserTrades().handler.bind(new GetUserTrades));

router.get("/trades/get_public_trades", new GetPublicTrades().handler.bind(new GetPublicTrades));

router.put("/trades/buy_card_offer", new BuyCardOffer().handler.bind(new BuyCardOffer));

router.put("/trades/answer_card_offer", new AnswerCardOffer().handler.bind(new AnswerCardOffer));

router.put("/trades/refuse_card_offer", new RefuseCardOffer().handler.bind(new RefuseCardOffer));

router.put("/trades/accept_card_offer", new AcceptCardOffer().handler.bind(new AcceptCardOffer));

router.get("/card/show_total_items", new ShowTotalItems().handler.bind(new ShowTotalItems));

router.post("/card/shop_card", new ShopCard().handler.bind(new ShopCard));

router.post("/card/daily_collect", new DailyCollect().handler.bind(new DailyCollect));

module.exports = router;