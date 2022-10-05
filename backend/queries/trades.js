const GetUserTrades = `
    SELECT * FROM trades WHERE author = $1 AND status = $2;
`

const GetPublicTrades = `
    SELECT * FROM trades WHERE status = 'open';
`

module.exports = { GetUserTrades , GetPublicTrades}