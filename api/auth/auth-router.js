const router = require('express').Router();
const Users = require('./auth-model')

const { checkValidRegister } = require('../middleware/restricted');

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


router.post('/register', checkValidRegister, async (req, res) => {
    const { username, password } = req.body;       // Take whatever the user types
    const hash = bcrypt.hashSync(password, 8);     // Hashes the user's password
    const user = { username, password: hash }      // Create a user object with the username and hashed password

    try {
        const createdUser = await Users.create(user) // create = Knex* db('users').insert(user)
        console.log('createdUser', createdUser)
        res.status(201).json(createdUser)            // json = createdUser
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', err });
    }
})





module.exports = router;