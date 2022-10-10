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
          //const encodedData = this.#jwt.encode(LoginUser.user);
          return { message: "Sucess", data: { name: LoginUser.user.name, email: LoginUser.user.email } };
        } else {
          return { message: "Failed", data: "" };
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = Session;