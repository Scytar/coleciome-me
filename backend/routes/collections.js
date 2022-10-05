const express = require("express");
const router = express.Router();

const InsertCollection = require('../controllers/collections/new_collection');
const GetCollections = require('../controllers/collections/get_collections');

router.post("/collections/insert", new InsertCollection().handler.bind(new InsertCollection));

router.get("/collections/get", new GetCollections().handler.bind(new GetCollections));


module.exports = router;