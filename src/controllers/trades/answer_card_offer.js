class AnswerCardOffer {
    #answer_card_offer = require("../../services/trades/answer_card_offer");
  
    async handler(req, res) {
      try {
        const response = await new this.#answer_card_offer().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = AnswerCardOffer;