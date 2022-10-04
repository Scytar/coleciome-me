class InsertUsers {
  #userValidator = require("../validator/user_validator");
  #userTable = require("../database/postgres/user");

  async execute(user_data) {
    try {
      const userData = new this.#userValidator(user_data);
      console.log(userData);
      if (userData.errors != "") {
        throw new Error(userData.errors);
      }
      const InsertUser = await new this.#userTable().insert(userData.user);

      if (InsertUser) {
        return { message: "sucess inserting user", data: userData };
      } else {
        return { message: "failed inserting user", data: "" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = InsertUsers;
