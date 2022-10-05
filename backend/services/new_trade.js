class NewTrade {
  #CartTrade = require("../database/postgres/cart");

  async execute(data) {
    try {

      const NEWTRADE = await new this.#CartTrade().trade(
        data.author,
        data.offer,
        data.offer_value,
        data.request
      );
        
      if (NEWTRADE) {
        return { message: "Success in creating new trade" };
      } else {
        return { message: "Failed in creating new trade" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = NewTrade;
