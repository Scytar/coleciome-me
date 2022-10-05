const NewTrade = `
    INSERT INTO trades(author,offer,offer_value,request) 
    VALUES($1, $2, $3, $4);
`

const verifildTotalItems = `SELECT * FROM total_items WHERE ownerid = $1`

const shopCardUPDATE = `UPDATE users SET wallet = wallet - $1 WHERE id = $2;`

const shopCardSELECT = `SELECT id FROM memes WHERE lootable = true AND rare = $1;`

const shopCardINSERT = `INSERT INTO total_items (ownerid,itemid) VALUES($1, $2) RETURNING itemid;`

module.exports = { NewTrade, verifildTotalItems, shopCardUPDATE, shopCardSELECT, shopCardINSERT }