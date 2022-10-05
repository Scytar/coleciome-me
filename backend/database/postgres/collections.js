const { Pool } = require("pg");
const myDb = require("./");

class Collections extends myDb {
  async create(data) {
    try {
        const { NewCollection } = require('../../queries/collections');

        const new_collection = await this._pool.query(NewCollection, [data.name]);
        return new_collection.rows[0]
    } catch (error) {
        console.error(error)
        return error;
    }
  }

  async get() {
    try {
        const { GetCollection } = require('../../queries/collections');

        const get_collections = await this._pool.query(GetCollection);
        return get_collections.rows;
    } catch (error) {
        console.error(error)
        return error;
    }
  }
}

module.exports = Collections;