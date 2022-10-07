const NewCollection = `
    INSERT INTO collections (name) values ($1) RETURNING *;
`
const GetCollection = `
    SELECT * FROM collections;
`

module.exports = { NewCollection , GetCollection } ;