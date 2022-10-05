class AnswerCardOffer {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute(trades_data) {
        try {
            const ANSWER_CARD_OFFER = await new this.#tradesTable().answerCardOffer(trades_data)

            
            if (ANSWER_CARD_OFFER) {
            return { message: "Success in buying trade" , data: ANSWER_CARD_OFFER };
            } else {
            return { message: "Failed buying trade" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = AnswerCardOffer;
  