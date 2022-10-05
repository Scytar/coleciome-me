class ShopCard {
    #CartTrade = require("../../database/postgres/card");
  
    async execute(data) {
      try {
        const DAILYCOLLECT = await new this.#CartTrade().dailyCollect(data)
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;