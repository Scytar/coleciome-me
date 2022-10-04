class InsertUsers {
  #insert_user = require("../services/insert_user");

  async handler(req, res) {
    try {
      const response = await new this.#insert_user().execute(req.body);
      res.json(response);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = InsertUsers;
