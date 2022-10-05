class GetPublicTrades {
    #tradesTable = require("../database/postgres/trades");
  
    async execute() {
        try {
            const GET_PUBLIC_TRADES = await new this.#tradesTable().getPublicTrades()

            
            if (GET_PUBLIC_TRADES) {
            return { message: "Success in searching public trades" , data: GET_PUBLIC_TRADES };
            } else {
            return { message: "Failed in searching public trades" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = GetPublicTrades;
  