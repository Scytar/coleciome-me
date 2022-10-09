class GetUserTrades {
    #tradesTable = require("../../database/postgres/trades");
  
    async execute(trades_data) {
        try {
            const GET_USER_TRADES = await new this.#tradesTable().getUserTrades(trades_data)

            
            if (GET_USER_TRADES) {
            return { message: "Success in searching trades" , data: GET_USER_TRADES };
            } else {
            return { message: "Failed in searching trades", data: "" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = GetUserTrades;
  