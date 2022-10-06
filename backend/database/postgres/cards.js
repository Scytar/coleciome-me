const { Pool } = require("pg");
const myDb = require(".");

class Cards extends myDb {
  async trade(author, offer, offer_value, request) {
    try {
      const { NewTrade } = require("../../queries/cards");

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
      const { verifyTotalItems } = require("../../queries/cards");

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
      } = require("../../queries/cards");

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

  async dailyCollect(data) {
    try {
      console.log('chamou a daily collect!')
      const {
        DailyCheck,
        DailyStreak,
        SelectCardLootable,
        InsertCardUser,
        ResetDailyCollect,
      } = require("../../queries/cards");

      const daily_check = await this._pool.query(DailyCheck, [data.userid]);
      const daily_check_date = Date.parse(daily_check.rows[0].daily_collect);
      const today = Date.parse(new Date());

      const isDailyAvailable = Math.floor((today - daily_check_date)/82800000)
      console.log("is daily available? ", isDailyAvailable);
      if (isDailyAvailable < 1) {
        return {message:"You must wait at least 23 hours to collect another daily."}
      }

      const daily_streak = await this._pool.query(DailyStreak, [data.userid]);

      const isRare = ((daily_streak.rows[0]['daily_streak']+1%28) === 0) 

      console.log('antes do begin')
      await this._pool.query('begin;')
      const select_card_lootable = await this._pool.query(SelectCardLootable,[isRare]);
      
      console.log('depois do select lootable')
      const insert_card_user = await this._pool.query(InsertCardUser, [data.userid,select_card_lootable.rows[0].id,]);

      console.log('depois do insert card')
      const reset_daily = await this._pool.query(ResetDailyCollect, [data.userid,]);

      console.log('select card ',select_card_lootable.rows[0].id)
      if (select_card_lootable && insert_card_user && reset_daily) {
        await this._pool.query('commit;')
        return select_card_lootable.rows[0].id
      }

      await this._pool.query('roolback;')
      return false

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Cards;
