const { Pool } = require("pg");
const myDb = require("./");

// mudar o nome de cart para card e remover o Cart/Trade/
class CartTrade extends myDb {
  async trade(author, offer, offer_value, request) {
    try {
      const { NewTrade } = require("../../queries/cart");

      await this._pool.query(`BEGIN;`);
      const new_trade = await this._pool.query(NewTrade, [
        author,
        offer,
        offer_value,
        request,
      ]);

      if (new_trade) {
        await this._pool.query(`COMMIT;`);
        return new_trade
      }

      await this._pool.query(`rollback;`);
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  async showItems(ownerid) {
    try {
      const { verifildTotalItems } = require("../../queries/cart");

      const total_items = await this._pool.query(verifildTotalItems, [ownerid]);

      return total_items;
    } catch (error) {
      console.error(error);
    }
  }

  async shopCards(data) {
    try {
      const {
        shopCardUPDATE,
        shopCardSELECT,
        shopCardINSERT,
      } = require("../../queries/cart");

      await this._pool.query(`BEGIN;`);
      const update = await this._pool.query(shopCardUPDATE, [
        data.price,
        data.userid,
      ]);
      const select = await this._pool.query(shopCardSELECT, [data.isRare])

      // Pick a random card
      const positionToPickRandomly = (Math.floor(Math.random()*select.rows.length));
      const cardIdToGive = select.rows[positionToPickRandomly].id;

      const insert = await this._pool.query(shopCardINSERT, [data.userid, cardIdToGive])

      if(update && select && insert) {
        await this._pool.query(`COMMIT;`);

        return insert
      } 

      await this._pool.query(`ROLLBACK;`);

      return false

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CartTrade;
