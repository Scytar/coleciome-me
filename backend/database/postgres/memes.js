const { Pool } = require("pg");
const myDb = require("./");

class Memes extends myDb {
  async create(data) {
    try {
        const { NewMeme } = require('../../queries/memes');

        const new_meme = await this._pool.query(NewMeme, [data.name, data.memeCollectionId, data.isLootable, data.isMemeRare])
        return new_meme.rows[0]
    } catch (error) {
        console.error(error)
        return error
    }
  }

async getLootables(data) {
    try {
        const { GetLootables } = require('../../queries/memes');

        const get_Lootables = await this._pool.query(GetLootables, [data.isRare])
        return get_Lootables.rows
    } catch (error) {
        console.log(error)
    }
}
}

module.exports = Memes;