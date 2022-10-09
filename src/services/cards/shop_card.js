class ShopCard {
    #Cards = require("../../database/postgres/cards");
  
    async execute(data) {
      try {
        const SHOPCARD = await new this.#Cards().shopCards(data);
  
        if(!SHOPCARD) {
            return { message: "Failed purchasing card", data: ""}
        }

        return { message: "Sucess purchasing card", data: SHOPCARD};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;