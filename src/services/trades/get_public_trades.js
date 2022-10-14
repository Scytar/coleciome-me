class GetPublicTrades {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute() {
        try {
            const GET_PUBLIC_TRADES = await new this.#tradesTable().getPublicTrades()

            
            if (GET_PUBLIC_TRADES) {
            return { message: "Sucesso ao visualizar ofertas públicas" , data: GET_PUBLIC_TRADES };
            } else {
            return { message: "Failed in searching public trades", data: "" };
            }
    
        } catch (error) {
            console.error(error);
        }
    }
}
  
module.exports = GetPublicTrades;
  