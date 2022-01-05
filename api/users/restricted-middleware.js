const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')


// Verifies if a user is logged in or not.

// To test this function we need manually add a key value pair in out HTTP client"
// KEY: Authorization VALUE: foobar (sad path) || VALUE: 8901234urtuiwehf... AKA paste token.

// jwt.verify(token, JWT_SECRET, (err, decodedToken) SEE BELOW COMMENTS*
// err and decodedToken are callbacks
// If verification fails, the err will be truthy and the decodedToken falsy.
// If the verification succeeds, the err will be falsy the decodedToken truthy. 

module.exports = function (req, res, next) {

    const token = req.headers.authorization
    console.log('token ======', token)

    if (!token) {
        return res.status(404).json({ message: 'Token not found' })
    }

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: `Bad token, ${err.message}` }) // If token does not match (foobar was the example)
        }
        req.decodedToken = decodedToken  // Gives the contents of the token to the req objects.
        return next()
    })

};  