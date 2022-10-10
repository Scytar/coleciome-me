class LoginUsers {
  #LoginUsers = require("../../services/users/login_user");
  #jwt = require('../../module/jwt');

  async handler(req, res) {
    try {
      if ( !req.cookies["userSession"] ) {
        const response = await new this.#LoginUsers().execute(req.body);

        if(response.data != "") {
          res
            .cookie("userSession", response.data, {maxAge: 60000 * 60 * 5})
            .json(response);
        }
        else {
          res.json(response);
        }
      } else {
        const user_data =  this.#jwt.decode(req.cookies["userSession"])
        
        if ( user_data.id ) {
          //res.clearCookie("userSession");
          res.json({message:`Bem-vindo(a) de volta, ${user_data.name}!`})
        }

        res.json({message: user_data});
      }
      // const response = await new this.#LoginUsers().execute(req.body);
      
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = LoginUsers;
