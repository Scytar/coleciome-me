const { response } = require("express");

class InsertUsers {
  #insert_user = require("../../services/users/insert_user");

  async handler(req, res) {
    try {
      const response = await new this.#insert_user().execute(req.body);
      // console.log('respose: ',response)
      res.json(response);
    } catch (error) {
      res.json({message:error})
      console.error(error);
    }
  }
}

module.exports = InsertUsers;
