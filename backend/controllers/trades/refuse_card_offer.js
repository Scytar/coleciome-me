class RefuseCardOffer {
    #refuse_card_offer = require("../../services/trades/refuse_card_offer");
  
    async handler(req, res) {
      try {
        const response = await new this.#refuse_card_offer().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = RefuseCardOffer;