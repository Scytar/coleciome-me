const GetUserTrades = `
    SELECT * FROM trades WHERE author = $1 AND status = $2;
`

const GetPublicTrades = `
    SELECT * FROM trades WHERE status = 'open';
`

const SelectTrade = `
    SELECT * FROM trades WHERE id = $1;
`

const SelectBuyer = `
    SELECT * FROM users WHERE id = $1;
`

const CloseBuy = `
    UPDATE trades SET dealer = $1, answer_date = now(), closing_date = now(), status = 'closed' WHERE id = $2;
`

const DebitBuyer = `
    UPDATE users SET wallet = wallet - $1 WHERE id = $2;
`

const CreditSeller = `
    UPDATE users SET wallet = wallet + $1 WHERE id = $2;
`

const ChangeCardOwner = `
    UPDATE total_items SET ownerid = $1, update_date = now() WHERE id = $2;
`

const ItemToOfferBack = `
    SELECT id FROM total_items WHERE (ownerid = $1 AND itemid = $2) limit 1;
`

const UpdateTradeWithAnswer = `
    UPDATE trades SET dealer = $1, change = $2, answer_date = now(), status = 'answered' WHERE id = $3 RETURNING id;
`

const RefuseOffer = `
    UPDATE trades SET status = 'open' WHERE id = $1;
`
const CloseTrade = `
    UPDATE trades SET closing_date = now(), status = 'closed' WHERE id = $1 RETURNING *;
`
module.exports = { GetUserTrades , GetPublicTrades , SelectTrade , SelectBuyer , CloseBuy , DebitBuyer , CreditSeller , ChangeCardOwner , ItemToOfferBack , UpdateTradeWithAnswer , RefuseOffer, CloseTrade }