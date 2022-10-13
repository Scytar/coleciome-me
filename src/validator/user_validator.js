class UserValidator {
  #userNameValidator = require("./user_name_validator");
  #userEmailValidator = require("./user_email_validator");
  #userCpfValidator = require("./user_cpf_validator");
  #userPasswordValidator = require("./user_password_validator");
  #userPhoneNumberValidator = require("./user_phone_validator");

  constructor(user_data) {
    this.errors = "";
    this.user = this.validate(user_data);
  }

  validate(user_data) {
    // const username = new this.#userNameValidator(user_data.username);
    const password = new this.#userPasswordValidator(user_data.password);
    // const cpf = new this.#userCpfValidator(user_data.cpf);
    const email = new this.#userEmailValidator(user_data.email);
    // const phone = new this.#userPhoneNumberValidator(user_data.phone);
    this.errors =
      // username.errors +
      password.errors +
      // cpf.errors +
      email.errors //+
      // phone.errors;

      return user_data

    // return {
      // username: username.username,
      // password: password.password,
      // cpf: cpf.cpf,
      // email: email.email
      // phone: phone.phone,
      // cardname: user_data.cardname,
      // cardnum: user_data.cardnum,
      // cardcvv: user_data.cardcvv,
      // card_expiration: user_data.card_expiration
    // };
  }
}

module.exports = UserValidator;
