const express = require("express");
const router = express.Router();

const InsertMeme = require('../controllers/new_meme');
const GetLootablesMemes = require('../controllers/get_lootables_memes');

router.post("/memes/insert", new InsertMeme().handler.bind(new InsertMeme));

router.get("/memes/getLootablesMemes", new GetLootablesMemes().handler.bind(new GetLootablesMemes));


module.exports = router;