class UserNameValidator {
    constructor(username) {
        this.errors = "";
        this.username = this.validate(username)
    }

    validate(username) {
        
        if(Number(username)) {
            this.errors += "There cannot be numbers in the username"
            console.log(username)
            return ""
        }
        
        return username.trim() 
    }

}

module.exports = UserNameValidator