class InsertOrder {
    #new_order = require("../services/new_order");
  
    async handler(req, res) {
      try {
        const response = await new this.#new_order().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = InsertOrder;