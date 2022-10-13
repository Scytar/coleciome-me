const getItem = `
    SELECT * FROM memes WHERE id = (SELECT itemid FROM total_items WHERE id = $1);
`

const NewTrade = `
    INSERT INTO trades(author,offer,offer_value,cardid,request) 
    VALUES($1, $2, $3, $4, $5);
`
const SetItemAsTrading = `
    UPDATE total_items SET trading = true WHERE id = $1;
`

const SetItemAsNotTrading = `
    UPDATE total_items SET trading = false WHERE id = $1;
`

const verifyTotalItems = `SELECT * FROM total_items WHERE ownerid = $1 AND trading = false;`

const shopCardUPDATE = `UPDATE users SET wallet = wallet - $1 WHERE id = $2;`

const SelectCardLootable = `SELECT * FROM memes WHERE lootable = true AND rare = $1;`

const InsertCardUser = `INSERT INTO total_items (ownerid,itemid) VALUES($1, $2) RETURNING *;`

const DailyCheck = `
    SELECT daily_collect FROM users WHERE id = $1;
`

const DailyStreak = `SELECT daily_streak FROM users WHERE id = $1;`

const ResetDailyCollect = `UPDATE users SET daily_collect = now() , daily_streak = daily_streak +1 WHERE id = $1;`

module.exports = { getItem , NewTrade, verifyTotalItems, shopCardUPDATE, SelectCardLootable, InsertCardUser , DailyCheck , DailyStreak , ResetDailyCollect ,SetItemAsTrading , SetItemAsNotTrading }