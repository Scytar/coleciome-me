class ShopCard {
    #Cards = require("../../database/postgres/cards");
  
    async execute(data) {
      try {
        const SHOPCARD = await new this.#Cards().shopCards(data);
  
        if(!SHOPCARD) {
            return { message: "Ops! Algo deu errado na sua compra. Por favor, tente novamente mais tarde!", data: ""}
        }

        return { message: "Parabéns! Meme comprado com sucesso", data: SHOPCARD};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;