class GetCard {
    #Cards = require("../../database/postgres/cards");
  
    async execute(itemid) {
      try {
        const GET_CARD = await new this.#Cards().getCard(itemid)

        if(!GET_CARD) {
          return { message: "Falha ao procurar item", data: ""}
        }

      return { message: "Item encontrado!", data: GET_CARD};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = GetCard;