class UserPasswordValidator {
    constructor(password) {
        this.errors = ""
        this.password = this.validate(password)
    }
    
    validate(password) {
        if(password.length < 8) {
            this.errors += "The password must contain at least 8 digits"

            return ""
        }

        // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/

        if(!regex.test(password.trim())) {
            this.errors += "Password must contain at least 1 uppercase character, 1 number without repeating and 1 special character"

            return ""
        }

        return password.trim()
    }
}

module.exports = UserPasswordValidator