const express = require("express");
const router = express.Router();

const InsertMeme = require('../controllers/memes/new_meme');
const GetLootablesMemes = require('../controllers/memes/get_lootables_memes');
const GetMeme = require('../controllers/memes/get_meme')

router.post("/memes/insert", new InsertMeme().handler.bind(new InsertMeme));
//name -> varchar
//collectionId -> integer
//isLootable -> boolean
//isMemeRare -> boolean

router.get("/memes/getLootablesMemes", new GetLootablesMemes().handler.bind(new GetLootablesMemes));
//isRare -> boolean

router.get("/memes/get/:id", new GetMeme().handler.bind(new GetMeme));
// itemid -> integer

module.exports = router;