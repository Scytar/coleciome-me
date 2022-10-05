class RefuseOffer {
    #Trades = require("../database/postgres/trades");
  
    async execute(trade_data) {
      try {
  
        const REFUSE_CARD_OFFER = await new this.#Trades().refuseOffer(trade_data);
          
        if (REFUSE_CARD_OFFER) {
          return { message: "Success in refusing offer" , data: REFUSE_CARD_OFFER };
        } else {
          return { message: "Failed in refusing offer" };
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = RefuseOffer;
  