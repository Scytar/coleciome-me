const insertUser = `
    INSERT INTO users (name, email, password, cpf, phone)
    VALUES ($1, $2, $3, $4, $5) RETURNING id;
`;

const selectUser = `
    SELECT id FROM users WHERE name = $1 OR email = $2 OR cpf = $3;
`;

const updateUser = `
    UPDATE users SET name = $1,
    email = $2,
    password = $3,
    cpf = $4,
    phone = $5,
    cardname = $6,
    cardnum = $7,
    cardcvv = $8,
    card_expiration = $9,
    update_date = now() WHERE id = $10 RETURNING *;  
`;


const validateUser = `
    SELECT * FROM users WHERE email = $1 AND password = $2 AND active = true;
`;

const deleteUser = `
    UPDATE users SET active = false, update_date = now() WHERE id= $1 RETURNING id;
`

module.exports = { insertUser, selectUser, updateUser, validateUser, deleteUser };
