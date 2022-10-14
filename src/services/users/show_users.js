class ShowUsers {
  #userTable = require("../../database/postgres/user");
  #jwt = require("../../module/jwt")

  async execute(user_data) {
    try {
      const decodedData = this.#jwt.decode(user_data)

      const validateUser = await new this.#userTable().validate(
        decodedData.email,
        decodedData.password
      );

      if (!validateUser.userExists) {
        return { message: 'user not registered!!' };
      } 
      
      return validateUser.user

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ShowUsers;
