const { Pool } = require("pg");
const myDb = require("./");

class Memes extends myDb {
  async create(data) {
    try {
      const { NewMeme } = require("../../queries/memes");
      console.log('Antes da query: ',data)
      const new_meme = await this._pool.query(NewMeme, [
        data.name,
        data.collectionId,
        data.isLootable,
        data.isMemeRare,
      ]);
      return new_meme.rows[0];
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getLootables(data) {
    try {
      const { GetLootables } = require("../../queries/memes");

      const get_Lootables = await this._pool.query(GetLootables, [data.isRare]);
      return get_Lootables.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async getMeme(data) {
    try {
      const { GetMeme } = require("../../queries/memes");

      const get_meme = await this._pool.query(GetMeme, [data]);
      return get_meme.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Memes;
