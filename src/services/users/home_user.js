class Home {
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
          const encodedData = this.#jwt.encode(LoginUser.user);
          return { message: "sucess login user", data: encodedData };
        } else {
          return { message: "failed login user", data: "" };
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = Home;