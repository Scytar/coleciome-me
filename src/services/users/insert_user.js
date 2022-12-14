class InsertUsers {
  #userValidator = require("../../validator/user_validator");
  #userTable = require("../../database/postgres/user");

  async execute(user_data) {
    try {
      const userData = new this.#userValidator(user_data);
      
      if (userData.errors != "") {
        return { message: userData , data: "" };
      }
      const InsertUser = await new this.#userTable().insert(userData.user);

      if (InsertUser) {
        return { message: InsertUser, data: userData };
      } else {
        return { message: "failed inserting user", data: "" };
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = InsertUsers;
