  const cachedSessions = require('../../../server.js')

  class LoginUsers {
      #LoginUsers = require("../../services/users/login_user");

      async handler(req, res) {

        const defaultTimeToLive = 60000;
        try {
          // let response
          // //Check cookie time to live
          // console.log('cookie: ',req.cookies["userSession"])
          // console.log('cache: ', cachedSessions[`${req.cookies["userSession"]}`]);
          // if (!req.cookies["userSession"] || !cachedSessions[`${req.cookies["userSession"]}`] || (cachedSessions[`${req.cookies["userSession"]}`].tll) - Date.now() < 0) {
          //   console.log('checou');
          //   response = await new this.#LoginUsers().execute(req.body);
          // } else {
          //   console.log('asdasdasdasd');
          //   return res.json({message:`Acesso realizado com sucesso!`})
          // }
          const response = await new this.#LoginUsers().execute(req.body);
          if(response.data != "") {
            //Cache Session
            cachedSessions[response.data] = Date.now()+defaultTimeToLive;
            response.data.password = null;
            //Give Cookie
            res
              .cookie("userSession", response.data, {maxAge: defaultTimeToLive, httpOnly: true})
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
