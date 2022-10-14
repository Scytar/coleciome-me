class CancelOffer {
    #Trades = require("../../database/postgres/Trades");
  
    async execute(data) {
      try {
        const CANCEL_OFFER = await new this.#Trades().cancelOffer(data)

        if(!CANCEL_OFFER) {
          return { message: "Erro ao cancelar oferta", data: ""}
        }

        // if (!CANCEL_OFFER.id) {
        //   return {message:"Espere 23h para resgatar novamente!", data: ""}
        // }

      return { message: "Oferta cancelada com sucesso!", data: CANCEL_OFFER};
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = CancelOffer;