class Session {
    #userTable = require("../../database/postgres/user");
    #jwt = require("../../module/jwt")
  
    async execute(user_data) {
      try {

        const decodedData = this.#jwt.decode(user_data);

        const LoginUser = await new this.#userTable().validate(
          decodedData.email,
          decodedData.password
        );
  
        if (LoginUser.userExists) {
          decodedData.password = null;
          decodedData.cardcvv = null;
          const encodedData = this.#jwt.encode(LoginUser.user);
          return { message: "Success", token:encodedData, data:decodedData };
        } else {
          return { message: "Failed", data: "" };
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = Session;