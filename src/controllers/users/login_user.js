
const cachedSessions = require('../../../server')

class LoginUsers {
  #LoginUsers = require("../../services/users/login_user");
  #jwt = require('../../module/jwt');

  async handler(req, res) {

    const defaultTimeToLive = 60000;
    try {
      let response
      //Check cookie time to live
      if (!req.cookies["userSession"] || !cachedSessions[`${req.cookies["userSession"]}`] || (cachedSessions[`${req.cookies["userSession"]}`].ttl) - Date.now() < 0) {
        response = await new this.#LoginUsers().execute(req.body);
      } else {
        const user_data =  this.#jwt.decode(req.cookies["userSession"]);
        user_data.password = null;
        user_data.cvv = null;
        return res.json({message:`Bem-vindo(a) de volta, ${user_data.name}`)
      }
      // const response = await new this.#LoginUsers().execute(req.body);
      if(response.data != "") {
        //Cache Session
        console.log(response)
        response.data.ttl = Date.now()+defaultTimeToLive
        cachedSessions[response.token] = response.data
        response.data.password = null;
        response.data.cardcvv = null;
        //Give Cookie
        return res
          .cookie("userSession", response.token, {maxAge: defaultTimeToLive, httpOnly: true})
          .json({ message: response.message, data: response.data });
      } else {
          res.json(response);
      }      
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = LoginUsers;
