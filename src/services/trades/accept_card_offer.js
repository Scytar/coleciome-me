class AcceptCardOffer {
    #tradesTable = require("../../database/postgres/trades");
   

    async execute(trades_data) {
        try {
            const ACCEPT_CARD_OFFER = await new this.#tradesTable().acceptCardOffer(trades_data)

            console.log(ACCEPT_CARD_OFFER)
            if (ACCEPT_CARD_OFFER) {
        
                return { message: (ACCEPT_CARD_OFFER)};
         
        } else {
         
                return { message: "Falha ao aceitar oferta" };
         
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = AcceptCardOffer;
  