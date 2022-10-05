class ShopCard {
    #CartTrade = require("../database/postgres/cart");
  
    async execute(data) {
      try {
        const SHOPCARD = await new this.#CartTrade().shopCards(data);
  
        if(shopCards) {
            return { message: "Failed purchasing card"}
        }

        return SHOPCARD;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;