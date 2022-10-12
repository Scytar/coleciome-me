class CancelOffer {
    #Trades = require("../../database/postgres/Trades");
  
    async execute(data) {
      try {
        const CANCEL_OFFER = await new this.#Trades().cancelOffer(data)

        if(!CANCEL_OFFER) {
          return { message: "Falha ao resgatar", data: ""}
        }

        if (!CANCEL_OFFER.id) {
          return {message:"Espere 23h para resgatar novamente!", data: ""}
        }

      return { message: "Recompensa diária resgatada!", data: CANCEL_OFFER};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = CancelOffer;