class DeleteUsers {
  #delete_user = require("../services/delete_user");

  async handler(req, res) {
    try {
      const response = await new this.#delete_user().execute(req.body);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = DeleteUsers;
