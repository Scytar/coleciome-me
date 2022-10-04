class ShowUsers {
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
      
      return validateUser.user

    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ShowUsers;
