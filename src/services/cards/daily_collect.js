class ShopCard {
    #Cards = require("../../database/postgres/cards");
  
    async execute(data) {
      try {
        const DAILYCOLLECT = await new this.#Cards().dailyCollect(data)

        if(!DAILYCOLLECT) {
          return { message: "Failed daily collect card", data: ""}
      }

      return { message: "Sucess daily collect card", data: DAILYCOLLECT};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = ShopCard;