class AcceptCardOffer {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute(trades_data) {
        try {
            const ACCEPT_CARD_OFFER = await new this.#tradesTable().acceptCardOffer(trades_data)

            
            if (ACCEPT_CARD_OFFER) {
            return { message: "Success in buying trade" , data: ACCEPT_CARD_OFFER };
            } else {
            return { message: "Failed buying trade" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = AcceptCardOffer;
  