const { Pool } = require("pg");
const myDb = require("./");

class Trades extends myDb {
  async getUserTrades(data) {
    try {
        const { GetUserTrades } = require('../../queries/trades');

        const get_user_trades = await this._pool.query(GetUserTrades, [data.userid])
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

    async buyCardOffer(data) {
        try {
          const { SelectTrade , CloseBuy , DebitBuyer , CreditSeller , ChangeCardOwner , SelectBuyer } = require('../../queries/trades');

          const select_trade = await this._pool.query(SelectTrade, [data.tradeId]);
          const selected_trade = select_trade.rows[0]
          const selected_buyer = await this._pool.query(SelectBuyer, [data.userid]);
          
          if (selected_buyer.rows.wallet < selected_trade.offer_value) {
              return {message:'Not enought money in wallet!'}
          }
          await this._pool.query('begin;');

          const close_trade = await this._pool.query(CloseBuy, [data.userid, data.tradeId]);
          const debit_buyer = await this._pool.query(DebitBuyer, [selected_trade.offer_value, data.userid]);
          const credit_seller = await this._pool.query(CreditSeller, [selected_trade.offer_value, selected_trade.author]);
          const change_card_owner = await this._pool.query(ChangeCardOwner,[data.userid, selected_trade.offer]);

          if (close_trade && debit_buyer && credit_seller && change_card_owner){
              await this._pool.query('commit;');
              return {message:'Card bought succesfully!'}
          }
          await this._pool.query('rollback;');
          return false;

        } catch (error) {
            console.error(error);
            return error
        }
    }

    async answerCardOffer(data) {
        try {
            const { SelectTrade, ItemToOfferBack, UpdateTradeWithAnswer } = require('../../queries/trades');

            const select_trade = await this._pool.query(SelectTrade, [data.tradeId]);
            const selected_trade = select_trade.rows[0]

            const item_to_offer_back = await this._pool.query(ItemToOfferBack, [data.userid, selected_trade.request])

            if (!item_to_offer_back.rows[0]) {
                return {message:"You don't have the requested card!"}
            }

            await this._pool.query('begin;');
            const update_trade_with_answer = await this._pool.query(UpdateTradeWithAnswer, [data.userid, data.changeToOfferBack, data.tradeId])

            if (update_trade_with_answer) {
                await this._pool.query('commit;')
                return update_trade_with_answer.rows[0].id
            }
            await this._pool.query('rollback;')
            return false;

        } catch (error) {
            console.error(error);
            return error
        }
    }

    async refuseOffer(data) {
        try {
            const { RefuseOffer } = require('../../queries/trades');

            await this._pool.query('begin;')
            const refuse_offer = await this._pool.query(RefuseOffer, [data.tradeId]);

            if (refuse_offer) {
                await this._pool.query('commit;')
                return data.tradeId
            }

            await this._pool.query('rollback;')
            return false;

        } catch (error) {
            console.error(error);
            return error
        }
    }

    async acceptCardOffer(data) {
        try {
            const { SelectTrade , ItemToOfferBack , DebitBuyer , CreditSeller, ChangeCardOwner, CloseTrade} = require('../../queries/trades');

            const select_trade = await this._pool.query(SelectTrade, [data.tradeId])
            const selected_trade = select_trade.rows[0]
            const item_to_offer_back = await this._pool.query(ItemToOfferBack, [selected_trade.dealer, selected_trade.request])

            if (!item_to_offer_back.rows[0].id) {
                return {message:"Dealer doesn't have the card to offer back!"}
            }

            const tradeChangeCalculed = selected_trade.offer_value - selected_trade.change;

            await this._pool.query('begin;')

            const debit_buyer = await this._pool.query(DebitBuyer, [tradeChangeCalculed, selected_trade.dealer]);
            const credit_seller = await this._pool.query(CreditSeller, [tradeChangeCalculed, selected_trade.author]);

            const give_card_to_dealer = await this._pool.query(ChangeCardOwner, [selected_trade.dealer, selected_trade.offer]);
            const give_card_to_author = await this._pool.query(ChangeCardOwner, [selected_trade.author, item_to_offer_back.rows[0].id]);

            const close_trade = await this._pool.query(CloseTrade, [data.tradeId]);

            if (debit_buyer && credit_seller && give_card_to_author && give_card_to_dealer && close_trade) {
                await this._pool.query('commit;');
                return close_trade.rows[0]
            }
            await this._pool.query('rollback;')
            return false;

        } catch (error) {
            console.error(error);
            return error
        }
    }
}

module.exports = Trades;