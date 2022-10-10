class GetPublicTrades {
    #get_public_trades = require("../../services/trades/get_public_trades");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_public_trades().execute();
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetPublicTrades;