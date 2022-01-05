const jwt = require('jsonwebtoken')                     // installed this library // used in token builder
const { JWT_SECRET } = require('../../config');         // Some have BCRYPT_ROUNDS, not sure why

module.exports = function (user) {
    const payload = {
        sub: user.id,                                   // subject, normally the user id
        username: user.username,                        // Custom property
        role: user.role,
    }
    const options = {
        expiresIn: '12d',
    }
    return jwt.sign(payload, JWT_SECRET, options);      // JWT_SECRET is an import
}