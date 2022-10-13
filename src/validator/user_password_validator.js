class UserPasswordValidator {
    constructor(password) {
        this.errors = ""
        this.password = this.validate(password)
    }
    
    validate(password) {
        if(password.length < 3) {
            this.errors += "O servidor mandou avisar que a senha precisa ter pelo menos 3 dígitos!"

            return ""
        }

        // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/

        // if(!regex.test(password.trim())) {
        //     this.errors += "Password must contain at least 1 uppercase character, 1 number without repeating and 1 special character"

        //     return ""
        // }

        return password.trim()
    }
}

module.exports = UserPasswordValidator