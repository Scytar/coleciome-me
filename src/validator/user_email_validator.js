const UserCpfValidator = require("./user_cpf_validator")

class UserEmailValidator {
    constructor(email) {
        this.errors = ""
        this.email = this.validate(email)
    }

    validate(email) {

        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if(!regex.test(email)) {
            this.errors += "O Servidor pediu pra avisar que o e-mail tem algo de errado..."

            return ""
        }
        return email.trim()
    }
}

module.exports = UserEmailValidator