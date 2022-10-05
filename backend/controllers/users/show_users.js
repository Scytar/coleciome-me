class ShowUsers {
  #show_user = require("../../services/users/show_users");

  async handler(req, res) {
    try {
      const response = await new this.#show_user().execute(req.body);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ShowUsers;
