class ShowTotalItems {
  #Cards = require("../../database/postgres/cards");

  async execute(data) {
    try {
      const SHOWTOTALITEMS = await new this.#Cards().showItems(
        data.ownerid
      );

      if (SHOWTOTALITEMS) {
        return { message: "Success in getting cards", data: SHOWTOTALITEMS };
      } else {
        return { message: "Failed getting cards", data: "" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ShowTotalItems;
