class ShowTotalItems {
    #show_total_items = require("../services/show_total_items");
  
    async handler(req, res) {
      try {
        const response = await new this.#show_total_items().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = ShowTotalItems;