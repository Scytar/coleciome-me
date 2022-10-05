class InsertCollection {
    #new_collection = require("../services/new_collection");
  
    async handler(req, res) {
      try {
        const response = await new this.#new_collection().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = InsertCollection;