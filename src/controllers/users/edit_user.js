class EditUsers {
  #update_user = require("../../services/users/edit_user");

  async handler(req, res) {
    try {
      const response = await new this.#update_user().execute(req.body);
      response.data.user.password = null;
      response.data.user.cardcvv = null;
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = EditUsers;
