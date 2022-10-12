class BuyCardOffer {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute(trades_data) {
        try {
            const BUY_CARD_OFFER = await new this.#tradesTable().buyCardOffer(trades_data)

            
            if (BUY_CARD_OFFER) {
            return { message: "Meme comprado com sucesso!", data: BUY_CARD_OFFER };
            } else {
            console.log("Error: ",BUY_CARD_OFFER)
            return { message: "Erro ao comprar meme", data: "" };
            }
    
        } catch (error) {
            
            throw new Error(error);
        }
    }
}
  
module.exports = BuyCardOffer;