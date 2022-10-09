const NewMeme = `
    INSERT INTO memes (name,collection,lootable,rare) VALUES($1,$2,$3,$4) RETURNING *;
`

const GetMemes = `
    SELECT * FROM memes;
`

const GetLootables = `
    SELECT id FROM memes WHERE lootable = true AND rare = $1;
`

module.exports = { NewMeme , GetMemes , GetLootables } ;