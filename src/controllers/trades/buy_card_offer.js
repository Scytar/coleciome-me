class BuyCardOffer {
    #buy_card_offer = require("../../services/trades/buy_card_offer");
  
    async handler(req, res) {
      try {
        const response = await new this.#buy_card_offer().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = BuyCardOffer;