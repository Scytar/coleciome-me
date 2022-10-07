const UserCpfValidator = require("./user_cpf_validator")

class UserEmailValidator {
    constructor(email) {
        this.errors = ""
        this.email = this.validate(email)
    }

    validate(email) {

        const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.[a-z]?$/i

        if(!regex.test(email)) {
            this.errors += "Invalid email"

            return ""
        }
        return email.trim()
    }
}

module.exports = UserEmailValidator