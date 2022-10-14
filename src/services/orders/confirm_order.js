class ConfirmOrder {
    #ordersTable = require("../../database/postgres/orders");
  
    async execute(order_data) {
        try {
            const CONFIRM_ORDER = await new this.#ordersTable().confirm(order_data)

            
            if (CONFIRM_ORDER) {
            return { message: "Success in confirming order" , data: CONFIRM_ORDER };
            } else {
            return { message: "Failed in confirming order" };
            }
    
        } catch (error) {
            console.error(error);
        }
    }
}
  
module.exports = ConfirmOrder;
  