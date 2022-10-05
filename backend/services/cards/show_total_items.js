class ShowTotalItems {
  #CartTrade = require("../../database/postgres/card");

  async execute(data) {
    try {
      const SHOWTOTALITEMS = await new this.#CartTrade().showItems(
        data.ownerid
      );

      if (SHOWTOTALITEMS) {
        return { message: "Success in creating new trade", data: SHOWTOTALITEMS };
      } else {
        return { message: "Failed in creating new trade", data: "" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ShowTotalItems;
