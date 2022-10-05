class GetOrders {
    #get_orders = require("../services/get_orders");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_orders().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetOrders;