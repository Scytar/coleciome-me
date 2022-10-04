class DeleteUsers {
  #userTable = require("../database/postgres/user");

  async execute(user_data) {
      try {
        const validateUser = await new this.#userTable().validate(
          user_data.email,
          user_data.password
        );
  
        if (!validateUser.userExists) {
          return { message: 'user not registered!!' };
        }

        const deleteUser = await new this.#userTable().delete(validateUser.user)

        return { message: 'user deleted sucess!!!' }
      } catch (error) {
        throw new Error(error);
      }
    }
}

module.exports = DeleteUsers;
