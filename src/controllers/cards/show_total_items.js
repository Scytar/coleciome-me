class ShowTotalItems {
    #show_total_items = require("../../services/cards/show_total_items");
  
    async handler(req, res) {
      try {
        const response = await new this.#show_total_items().execute(req.params);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = ShowTotalItems;