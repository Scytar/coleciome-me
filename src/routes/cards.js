const express = require("express");
const router = express.Router();

const NewTrade = require("../controllers/trades/new_trade");
const GetUserTrades = require("../controllers/trades/get_user_trades");
const GetPublicTrades = require("../controllers/trades/get_public_trades");
const BuyCardOffer = require("../controllers/trades/buy_card_offer");
const AnswerCardOffer = require("../controllers/trades/answer_card_offer");
const RefuseCardOffer = require("../controllers/trades/refuse_card_offer");
const AcceptCardOffer = require("../controllers/trades/accept_card_offer");
const ShowTotalItems = require("../controllers/cards/show_total_items");
const ShopCard = require("../controllers/cards/shop_card");
const DailyCollect = require("../controllers/cards/daily_collect");

router.post("/trades/new_trade", new NewTrade().handler.bind(new NewTrade()));

router.get(
  "/trades/get_user_trades/:userid/:tradeStatus",
  new GetUserTrades().handler.bind(new GetUserTrades())
);
//userid -> integer
//tradeStatus -> ['open','answered','closed']

router.get(
  "/trades/get_public_trades",
  new GetPublicTrades().handler.bind(new GetPublicTrades())
);

router.put(
  "/trades/buy_card_offer",
  new BuyCardOffer().handler.bind(new BuyCardOffer())
);
//tradeId -> integer
//userid -> integer

router.put(
  "/trades/answer_card_offer",
  new AnswerCardOffer().handler.bind(new AnswerCardOffer())
);
//userid -> integer
//tradeId -> integer
//changeToOfferBack -> real

router.put(
  "/trades/refuse_card_offer",
  new RefuseCardOffer().handler.bind(new RefuseCardOffer())
//userid -> integer
);
//tradeId -> integer

router.put(
  "/trades/accept_card_offer",
  new AcceptCardOffer().handler.bind(new AcceptCardOffer())
);
//tradeId -> integer

router.get(
  "/card/show_total_items/:ownerid",
  new ShowTotalItems().handler.bind(new ShowTotalItems())
);
//ownerid -> integer

router.post("/card/shop_card", new ShopCard().handler.bind(new ShopCard()));
//userid -> integer
//price -> real
//isRare -> boolean

router.post(
  "/card/daily_collect",
  new DailyCollect().handler.bind(new DailyCollect())
);
//userid -> integer

module.exports = router;
