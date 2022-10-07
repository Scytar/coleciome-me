const { Pool } = require("pg");
const myDb = require("./");

class UserTable extends myDb {
  async insert(user) {
    try {
      const { insertUser, selectUser } = require("../../queries/user");

      const UserExists = await this._pool.query(selectUser, [
        user.username,
        user.email,
        user.cpf,
      ]);

      if (UserExists.rows[0]) return false;

      const VERIFIED_INSERT = await this._pool.query(insertUser, [
        user.username,
        user.email,
        user.password,
        user.cpf,
        user.phone,
      ]);

      if (VERIFIED_INSERT.rows[0].id) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async validate(email, password) {
    try {
      const { validateUser } = require("../../queries/user");

      const VALIDATED_USER = await this._pool.query(validateUser, [
        email,
        password,
      ]);

      if (VALIDATED_USER.rows[0]) {
        return { userExists: true, user: VALIDATED_USER.rows[0] };
      } else {
        return { userExists: false, user: null };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async update(user, id) {
    try {
      const { updateUser } = require("../../queries/user");

      const VERIFIED_INSERT = await this._pool.query(updateUser, [
        user.username,
        user.email,
        user.password,
        user.cpf,
        user.phone,
        id,
      ]);
      
      if (VERIFIED_INSERT.rows[0]) {
        
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async delete(user) {
    try {
      const { deleteUser } = require("../../queries/user");

      const DELETED_USER = await this._pool.query(deleteUser, [ user.id ])
      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserTable;