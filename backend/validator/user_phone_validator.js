class UserPhoneNumberValidator {
    constructor(phone) {
        this.errors = ""
        this.phone = this.validate(phone)
    }

    validate(phone) {
        if(typeof phone == "number" || !Number(phone)) {
            this.errors += "Phone number must be a string of numbers"
            return ""
        }

        if(phone.length != 11) {
            this.errors += "The phone number must contain 11 characters"

            return ""
        }

        return phone.trim()
    }
}

module.exports = UserPhoneNumberValidator