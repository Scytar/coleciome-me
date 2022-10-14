class EditUsers {
  #userValidator = require("../../validator/user_validator");
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
      const old_data = validateUser.data;

      Object.keys(user_data.new_data).forEach((key) => {
        old_data[key] = user_data.new_data[key];
      });

      const userData = new this.#userValidator(old_data);

      if (userData.errors != "") {
        return { message: userData.errors , data: "" };
      }

      const UpdateUser = await new this.#userTable().update(
        userData.data,
        old_data.id
      );

      if (UpdateUser) {
        return { message: "Sucesso ao atualizar usuário!", data: userData };
      } else {
        return { message: "Falha desconhecdia ao atualizar usuário", data: "" };
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = EditUsers;
