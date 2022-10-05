const { Pool } = require("pg");
const myDb = require("./");

class Orders extends myDb {
  async create(data) {
    try {
        const { NewOrder } = require('../../queries/orders');

        const new_order = await this._pool.query(NewOrder, [data.userid, data.valueToAddToWallet]) 
        return new_order.rows[0]
    } catch (error) {
        console.error(error)
        return error
    }
  }

async get(data) {
    try {
        const { GetOrders } = require('../../queries/orders');

        const get_orders = await this._pool.query(GetOrders, [data.userid , data.orderStatus]) //data.orderStatus = ['open','answered','closed']
        return get_orders.rows
    } catch (error) {
        console.log(error)
    }
}

async confirm(data) {
    try {
        const { ConfirmOrder , UpdateWallet, CloseOrder } = require('../../queries/orders');

        await this._pool.query('begin;');
        const confirm_order = await this._pool.query(ConfirmOrder, [data.orderid])
        const update_wallet = await this._pool.query(UpdateWallet, [data.userid])
        const close_order = await this._pool.query(CloseOrder, [data.userid])

        if (confirm_order && update_wallet && close_order){
            await this._pool.query('commit;');
            return close_order.rows
        }
        await this._pool.query('rollback;')
        return false
        
    } catch (error) {
        console.log(error)
    }
}
}

module.exports = Orders;