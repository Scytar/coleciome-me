const NewTrade = `
    INSERT INTO trades(author,offer,offer_value,request) 
    VALUES($1, $2, $3, $4);
`

const verifildTotalItems = `SELECT * FROM total_items WHERE ownerid = $1`

const shopCardUPDATE = `UPDATE users SET wallet = wallet - $1 WHERE id = $2;`

const SelectCardLootable = `SELECT id FROM memes WHERE lootable = true AND rare = $1;`

const InsertCardUser = `INSERT INTO total_items (ownerid,itemid) VALUES($1, $2) RETURNING itemid;`

const dailyCollect = `
    SELECT now()::timestamp - (
        SELECT daily_collect::timestamp FROM users WHERE id = ${userid}
    )
`

const dailyStreak = `SELECT daily_streak FROM users WHERE id = ${userid};`

const ResetDailyCollect = `UPDATE users SET daily_collect = now() , daily_streak = daily_streak +1 WHERE id = ${userid};`


module.exports = { NewTrade, verifildTotalItems, shopCardUPDATE, SelectCardLootable, InsertCardUser, dailyCollect, dailyStreak, ResetDailyCollect }