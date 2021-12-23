const router = require('express').Router();
const Users = require('./auth-model')

// const { checkValidRegister } = require('../middleware/restricted');

// const bcrypt = require('bcryptjs');                     // This goes wherever we use bcrypt
// const jwt = require('jsonwebtoken');                    // installed this library // used in tokenbuilder
// const { JWT_SECRET } = require('../../config/secrets'); // Some have BCRYPT_ROUNDS, not sure why


// Gets all users = localhost:9000/api/auth
router.get('/', (req, res) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get users', error })
        })
});


module.exports = router;