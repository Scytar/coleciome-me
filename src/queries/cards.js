const NewTrade = `
    INSERT INTO trades(author,offer,offer_value,request) 
    VALUES($1, $2, $3, $4);
`

const verifyTotalItems = `SELECT * FROM total_items WHERE ownerid = $1`

const shopCardUPDATE = `UPDATE users SET wallet = wallet - $1 WHERE id = $2;`

const SelectCardLootable = `SELECT id, name FROM memes WHERE lootable = true AND rare = $1;`

const InsertCardUser = `INSERT INTO total_items (ownerid,itemid) VALUES($1, $2) RETURNING itemid;`

const DailyCheck = `
    SELECT daily_collect FROM users WHERE id = $1;
`

const DailyStreak = `SELECT daily_streak FROM users WHERE id = $1;`

const ResetDailyCollect = `UPDATE users SET daily_collect = now() , daily_streak = daily_streak +1 WHERE id = $1;`

module.exports = { NewTrade, verifyTotalItems, shopCardUPDATE, SelectCardLootable, InsertCardUser , DailyCheck , DailyStreak , ResetDailyCollect }