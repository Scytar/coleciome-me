const { Pool } = require("pg");

class myDb {
    _pool;
    constructor() {
        this._pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "coleciomeme",
            password: "postgres",
            port: 5432,
        }) 
    }
}

module.exports = myDb;
