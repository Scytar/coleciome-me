class LoginUsers {
  #userTable = require("../../database/postgres/user");
  #jwt = require("../../module/jwt")

  async execute(user_data) {
    try {
      // console.log('called execute method ',user_data)
      const LoginUser = await new this.#userTable().validate(
        user_data.email,
        user_data.password
      );
        // console.log('validate response ',LoginUser)
      if (LoginUser.userExists) {
        const encodedData = this.#jwt.encode(LoginUser.data);
        
        return { message: LoginUser.message, token: encodedData , data:LoginUser};
      } else {
        return { message: LoginUser.message, data: "" };
      }
    } catch (error) {
      console.error(error);
      return {error}
    }
  }
}

module.exports = LoginUsers;
