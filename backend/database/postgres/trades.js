const { Pool } = require("pg");
const myDb = require("./");

class Trades extends myDb {
  async getUserTrades(data) {
    try {
        const { GetUserTrades } = require('../../queries/trades');

        const get_user_trades = await this._pool.query(GetUserTrades, [data.userid, data.tradeStatus])
        return get_user_trades.rows
    } catch (error) {
        console.error(error)
        return error
    }
  }

  async getPublicTrades() {
    try {
        const { GetPublicTrades } = require('../../queries/trades');

        const get_public_trades = await this._pool.query(GetPublicTrades);
        return get_public_trades.rows
    } catch (error) {
        console.error(error);
        return error
    }
  }
}

module.exports = Trades;