class LoginUsers {
  #LoginUsers = require("../../services/users/login_user");

  async handler(req, res) {
    try {
      const response = await new this.#LoginUsers().execute(req.body);

      if(response.data != "") {
        res
          .cookie("userSession", response.data)
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
