class ShowTotalItems {
  #CartTrade = require("../database/postgres/cart");

  async execute(data) {
    try {
      const SHOWTOTALITEMS = await new this.#CartTrade().showItems(
        data.ownerid
      );

      return SHOWTOTALITEMS;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ShowTotalItems;
