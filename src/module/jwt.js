const jwt = require("jsonwebtoken");
const fs = require('fs')
const keyPath = __dirname + "/../keys/jwtRS256.pub"
const key = fs.readFileSync(keyPath)

module.exports = { 
    encode: (object) => {
        jwt.sign(
            object, 
            key, 
            { algorithm: 'RS256' },
            { expiresIn: 60 * 5 * 60 }
        );
    },
    decode: (encodedObject) => { 
        return jwt.verify(encodedObject, key, {algorithms: 'RS256'}, function(err, decoded) {
            return decoded
        })
    }
}