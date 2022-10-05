class NewTrade {
    #new_trade = require("../../services/trades/new_trade");
  
    async handler(req, res) {
      try {
        const response = await new this.#new_trade().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = NewTrade;