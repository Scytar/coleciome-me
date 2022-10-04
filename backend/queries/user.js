const insertUser = `
    INSERT INTO users (username, email, password, cpf, phone)
    VALUES ($1, $2, $3, $4, $5) RETURNING id;
`;

const selectUser = `
    SELECT id FROM users WHERE username = $1 OR email = $2 OR cpf = $3;
`;

const updateUser = `
    UPDATE users SET username = $1,
    email = $2,
    password = $3,
    cpf = $4,
    phone = $5,
    update_date = now() WHERE id = $6 RETURNING id;  
`;


const validateUser = `
    SELECT * FROM users WHERE email = $1 AND password = $2 AND active = true;
`;

const deleteUser = `
    UPDATE users SET active = false, update_date = now() WHERE id= $1;
`

module.exports = { insertUser, selectUser, updateUser, validateUser, deleteUser };
