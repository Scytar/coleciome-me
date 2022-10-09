const NewCollection = `
    INSERT INTO collections (name,file_name) values ($1,$2) RETURNING *;
`
const GetCollection = `
    SELECT * FROM collections;
`

module.exports = { NewCollection , GetCollection } ;