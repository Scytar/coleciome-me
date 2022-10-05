class BuyCardOffer {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute(trades_data) {
        try {
            const BUY_CARD_OFFER = await new this.#tradesTable().buyCardOffer(trades_data)

            
            if (BUY_CARD_OFFER) {
            return { message: "Success in buying trade" , data: BUY_CARD_OFFER };
            } else {
            return { message: "Failed buying trade" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = BuyCardOffer;
  