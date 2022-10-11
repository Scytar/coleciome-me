class NewTrade {
  #Cards = require("../../database/postgres/cards");

  async execute(data) {
    try {
      const NEWTRADE = await new this.#Cards().trade(
        data.author,
        data.offer,
        data.offer_value,
        data.cardid,
        0
      );
        
      if (NEWTRADE) {
        return { message: "Oferta criada com sucesso!", data: NEWTRADE };
      } else {
        return { message: "Falha ao criar troca", data: "" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = NewTrade;
