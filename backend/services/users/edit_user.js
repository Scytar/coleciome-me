class EditUsers {
  #userValidator = require("../validator/user_validator");
  #userTable = require("../../database/postgres/user");

  async execute(user_data) {
    try {
      const validateUser = await new this.#userTable().validate(
        user_data.email,
        user_data.password
      );

      if (!validateUser.userExists) {
        return { message: 'user not registered!!' }
      }
      const old_data = validateUser.user;

      Object.keys(user_data.new_data).forEach((key) => {
        old_data[key] = user_data.new_data[key];
      });

      const userData = new this.#userValidator(old_data);

      if (userData.errors != "") {
        throw new Error(userData.errors);
      }

      const UpdateUser = await new this.#userTable().update(
        userData.user,
        old_data.id
      );

      if (UpdateUser) {
        return { message: "Success updating user", data: userData };
      } else {
        return { message: "Failed updating user", data: "" };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = EditUsers;
