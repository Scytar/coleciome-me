class ShopCard {
    #Cards = require("../../database/postgres/cards");
  
    async execute(data) {
      try {
        const DAILYCOLLECT = await new this.#Cards().dailyCollect(data)
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;