class NewOrder {
    #ordersTable = require("../../database/postgres/orders");
  
    async execute(order_data) {
        try {
            const NEW_ORDER = await new this.#ordersTable().create(order_data)

            
            if (NEW_ORDER) {
            return { message: "Success in creating new order" , data: NEW_ORDER };
            } else {
            return { message: "Failed in creating new order" };
            }
    
        } catch (error) {
            console.error(error);
        }
    }
}
  
module.exports = NewOrder;
  