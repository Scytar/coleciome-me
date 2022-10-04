const express = require("express");
const router = express.Router();

const ShowUsers = require('../controllers/show_users')
const InsertUsers = require('../controllers/insert_user')
const DeleteUsers = require('../controllers/delete_user')
const EditUsers = require('../controllers/edit_user')

router.post("/user/insert", new InsertUsers().handler.bind(new InsertUsers));

router.get("/user/show", new ShowUsers().handler.bind(new ShowUsers));

router.put("/user/edit", new EditUsers().handler.bind(new EditUsers));

router.delete("/user/delete", new DeleteUsers().handler.bind(new DeleteUsers));

module.exports = router;