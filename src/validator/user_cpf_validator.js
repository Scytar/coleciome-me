class UserCpfValidator {
    constructor(cpf) {
        this.errors = ""
        this.cpf = this.validate(cpf)
    }

    validate(cpf) {
        if(typeof cpf !== "string") {
            this.errors += "cpf must be string"

            return ""
        }

        if(cpf.length != 11) {
            this.errors += "Invalid cpf"

            return ""
        }
        return cpf.trim()
    }
}

module.exports = UserCpfValidator