const { Pool } = require("pg");
const myDb = require(".");

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
        return new_trade;
      }

      await this._pool.query(`rollback;`);
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  async showItems(ownerid) {
    try {
      const { verifyTotalItems } = require("../../queries/cart");

      const total_items = await this._pool.query(verifyTotalItems, [ownerid]);

      console.log('ownerid :', ownerid)
      console.log('total items: ', total_items)

      return total_items.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async shopCards(data) {
    try {
      const {
        shopCardUPDATE,
        SelectCardLootable,
        InsertCardUser,
      } = require("../../queries/cart");

      await this._pool.query(`BEGIN;`);
      const update = await this._pool.query(shopCardUPDATE, [
        data.price,
        data.userid,
      ]);
      const select = await this._pool.query(SelectCardLootable, [data.isRare]);

      // Pick a random card
      const positionToPickRandomly = Math.floor(
        Math.random() * select.rows.length
      );
      const cardIdToGive = select.rows[positionToPickRandomly].id;

      const insert = await this._pool.query(InsertCardUser, [
        data.userid,
        cardIdToGive,
      ]);

      if (update && select && insert) {
        await this._pool.query(`COMMIT;`);

        return insert.rows[0].itemid;
      }

      await this._pool.query(`ROLLBACK;`);

      return false;
    } catch (error) {
      console.error(error);
    }
  }

  // async dailyCollect(data) {
  //   try {
  //     const {
  //       dailyCollect,
  //       dailyStreak,
  //       SelectCardLootable,
  //       InsertCardUser,
  //       ResetDailyCollect,
  //     } = require("../../queries/cart");

  //     const daily_collect = await this._pool.query(dailyCollect, [data.userid]);

  //     const daily_streak = await this._pool.query(dailyStreak, [data.userid]).rows[0].daily_streak;
 
  //     const select_card_lootable = await this._pool.query(
  //       SelectCardLootable,
  //       []
  //     );

  //     const insert_card_user = await this._pool.query(InsertCardUser, [
  //       data.userid,
  //       select_card_lootable.id,
  //     ]);

  //     const reset_daily = await this._pool.query(ResetDailyCollect, [
  //       data.userid,
  //     ]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}

module.exports = CartTrade;
