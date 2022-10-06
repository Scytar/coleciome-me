const NewOrder = `
    INSERT INTO wallet_orders (userid,value) VALUES($1,$2) RETURNING *;
`


const GetOrders = `
    SELECT * FROM wallet_orders WHERE userid = $1 AND status = $2;
`

const ConfirmOrder = `
    UPDATE wallet_orders SET status = 'confirmed' WHERE id = $1;
`

const UpdateWallet = `
    UPDATE users set wallet = wallet + (SELECT sum(value) FROM wallet_orders WHERE userid = $1 AND status = 'confirmed' AND closing_date IS NULL ) WHERE id = $1;
`

const CloseOrder = `
    UPDATE wallet_orders SET closing_date = now() WHERE userid = $1 AND status = 'confirmed' AND closing_date IS NULL RETURNING id;
`

module.exports = { NewOrder , GetOrders , ConfirmOrder , UpdateWallet , CloseOrder};