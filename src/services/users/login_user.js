class LoginUsers {
  #userTable = require("../../database/postgres/user");
  #jwt = require("../../module/jwt")

  async execute(user_data) {
    try {
      const LoginUser = await new this.#userTable().validate(
        user_data.email,
        user_data.password
      );

      if (LoginUser.userExists) {
        const encodedData = this.#jwt.encode(LoginUser.user);
        
        return { message: "success login user", token: encodedData , data:LoginUser.user};
      } else {
        return { message: "Falha na autenticação de acesso.\r\n Favor, verificar os dados inseridos.", data: "" };
      }
    } catch (error) {
      console.error(error);
      return {error}
    }
  }
}

module.exports = LoginUsers;
