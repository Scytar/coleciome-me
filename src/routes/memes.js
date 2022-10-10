const express = require("express");
const router = express.Router();

const InsertMeme = require('../controllers/memes/new_meme');
const GetLootablesMemes = require('../controllers/memes/get_lootables_memes');

router.post("/memes/insert", new InsertMeme().handler.bind(new InsertMeme));
//name -> varchar
//collectionId -> integer
//isLootable -> boolean
//isMemeRare -> boolean

router.get("/memes/getLootablesMemes/:isRare", new GetLootablesMemes().handler.bind(new GetLootablesMemes));
//isRare -> boolean

module.exports = router;