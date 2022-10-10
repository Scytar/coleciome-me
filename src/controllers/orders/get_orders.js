class GetOrders {
    #get_orders = require("../../services/orders/get_orders");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_orders().execute(req.params);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetOrders;