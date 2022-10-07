class GetOrders {
    #ordersTable = require("../../database/postgres/orders");
  
    async execute(order_data) {
        try {
            const GET_ORDERS = await new this.#ordersTable().get(order_data)

            
            if (GET_ORDERS) {
            return { message: "Success in searching orders" , data: GET_ORDERS };
            } else {
            return { message: "Failed in searching orders" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = GetOrders;
  