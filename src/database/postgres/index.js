const { Pool } = require("pg");
require('dotenv').config()

class myDb {
    _pool;
    constructor() {
        this._pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "coleciomeme",
            password: process.env.PSW_POSTGRES,
            port: 5432,
        }) 
    }
}

module.exports = myDb;
