class CancelOffer {
    #cancel_offer = require("../../services/trades/cancel_offer");
  
    async handler(req, res) {
      try {
        const response = await new this.#cancel_offer().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = CancelOffer;