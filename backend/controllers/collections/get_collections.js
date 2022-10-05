class GetCollections {
    #get_collections = require("../../services/collections/get_collections");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_collections().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetCollections;