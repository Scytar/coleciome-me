class DailyCollect {
    #Cards = require("../../database/postgres/cards");
  
    async execute(data) {
      try {
        const DAILYCOLLECT = await new this.#Cards().dailyCollect(data)

        if(!DAILYCOLLECT) {
          return { message: "Falha ao resgatar", data: ""}
        }

        if (!DAILYCOLLECT.id) {
          return {message:"Espere 23h para resgatar novamente! (apenas 30 seg no período de testes)", data: ""}
        }

      return { message: "Recompensa diária resgatada!", data: DAILYCOLLECT};
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = DailyCollect;