class GetUserTrades {
    #get_user_trades = require("../services/get_user_trades");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_user_trades().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetUserTrades;