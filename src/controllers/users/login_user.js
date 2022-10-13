
const cachedSessions = require('../../../server')

class LoginUsers {
  #LoginUsers = require("../../services/users/login_user");
  #jwt = require('../../module/jwt');

  async handler(req, res) {

    const defaultTimeToLive = 1800000;
    try {
      // console.log('login req: ',req.body)
      let response
      //Check cookie time to live
      if (!req.cookies["userSession"] || !cachedSessions[`${req.cookies["userSession"]}`] || (cachedSessions[`${req.cookies["userSession"]}`].ttl) - Date.now() < 0) {
        // console.log('first login validation')
        response = await new this.#LoginUsers().execute(req.body);
      } else {
        const user_data =  this.#jwt.decode(req.cookies["userSession"]);
        user_data.password = null;
        user_data.cvv = null;
        return res.json({message:`Bem-vindo(a) de volta, ${user_data.name}`, data:user_data})
      }
      // const response = await new this.#LoginUsers().execute(req.body);
      // console.log('before response.data if: ',response)
      if(response.data != "") {
        //Cache Session
        response.data.data.ttl = Date.now()+defaultTimeToLive
        cachedSessions[response.token] = response.data.data
        response.data.data.password = null;
        response.data.data.cardcvv = null;
        //Give Cookie
        // console.log('giving cookie: ',response)
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
