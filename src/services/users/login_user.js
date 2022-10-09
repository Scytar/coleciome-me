class LoginUsers {
  #userTable = require("../../database/postgres/user");
  // #jwt = require("../../module/jwt")

  async execute(user_data) {
    try {
      const LoginUser = await new this.#userTable().validate(
        user_data.email,
        user_data.password
      );

      if (LoginUser.userExists) {
        // const encodedData = this.#jwt.encode(LoginUser.user);
        return { message: "success login user", data: `${(Date.now())}` };
      } else {
        return { message: "failed login user", data: "" };
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = LoginUsers;
