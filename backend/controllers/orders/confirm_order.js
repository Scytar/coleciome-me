class ConfirmOrder {
    #confirm_order = require("../../services/orders/confirm_order");
  
    async handler(req, res) {
      try {
        const response = await new this.#confirm_order().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = ConfirmOrder;