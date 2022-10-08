const express = require("express");
const router = express.Router();

const ShowUsers = require('../controllers/users/show_users')
const InsertUsers = require('../controllers/users/insert_user')
const DeleteUsers = require('../controllers/users/delete_user')
const EditUsers = require('../controllers/users/edit_user')
const LoginUsers = require('../controllers/users/login_user')
const Home = require('../controllers/users/home_user')

router.post("/user/insert", new InsertUsers().handler.bind(new InsertUsers));
//username -> varchar
//email -> varchar
//password -> varchar
//cpf -> varchar(11)
//phone -> varchar(13)

router.get("/user/show", new ShowUsers().handler.bind(new ShowUsers));
//

router.put("/user/edit", new EditUsers().handler.bind(new EditUsers));
//precisa ser verificado    //precisa ser verificado    //precisa ser verificado    //precisa ser verificado    //precisa ser verificado

router.delete("/user/delete", new DeleteUsers().handler.bind(new DeleteUsers));

router.post("/user/login", new LoginUsers().handler.bind(new LoginUsers));

router.post("/home", new Home().handler.bind(new Home));

module.exports = router;