  const cachedSessions = require('../../../server.js')

  class LoginUsers {
      #LoginUsers = require("../../services/users/login_user");

      async handler(req, res) {

        const defaultTimeToLive = 60000;
        try {
          let response
          //Check cookie time to live
          if (!req.cookies["userSession"] || !cachedSessions[`${req.cookies["userSession"]}`] || (cachedSessions[`${req.cookies["userSession"]}`].ttl) - Date.now() < 0) {
            response = await new this.#LoginUsers().execute(req.body);
          } else {
            return res.json({message:`Bem-vindo(a) de volta, ${cachedSessions[req.cookies["userSession"]].name}!`,data:cachedSessions[`${req.cookies["userSession"]}`]})
          }
          // const response = await new this.#LoginUsers().execute(req.body);
          if(response.data != "") {
            //Cache Session
            response.data.ttl = Date.now()+defaultTimeToLive
            cachedSessions[Date.now()+defaultTimeToLive] = response.data
            console.log(cachedSessions[Date.now()+defaultTimeToLive])
            response.data.password = null;
            response.data.cardcvv = null;
            //Give Cookie
            res
              .cookie("userSession", response.data.ttl, {maxAge: defaultTimeToLive, httpOnly: true})
              .json({ message: response.message, data: response.data });
          }
          else {
            res.json({ message: response.message });
          }
        } catch (error) {
          console.error(error);
        }
    }
}

module.exports = LoginUsers;
