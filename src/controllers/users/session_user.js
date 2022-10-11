class Session {
  #Session = require("../../services/users/session_user");

  async handler(req, res) {
    try {
      const response = await new this.#Session().execute(
        req.cookies["userSession"]
      );

      if (response.data != "") {
        res
          .cookie("userSession", response.token)
          .json({message:response.message,data:response.data})
      } else {
        res.json(response);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Session;
