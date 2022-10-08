const { cachedSessions } = require('../../../server.js')

class LoginUsers {
  #LoginUsers = require("../../services/users/login_user");

  async handler(req, res) {

    const defaultTimeToLive = 60000;

    try {
      //Check cookie time to live
      if (!req.cookies["userSession"]
      || !cachedSessions[`${req.cookies["userSession"]}`]
      || (cachedSessions[`${req.cookies["userSession"]}`].tll) - Date.parse(Date.now()) < 0) {
        const response = await new this.#LoginUsers().execute(req.body);
      } else {
        return res.json({message:`Acesso realizado com sucesso!`})
      }

      if(response.data != "") {
        //Cache Session
        cachedSessions[`${response.data}`].tll = Date.parse(Date.now())+defaultTimeToLive;

        //Give Cookie
        res
          .cookie("userSession", response.data, {maxAge: defaultTimeToLive, httpOnly: true})
          .json({ message: response.message });
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
