const router = require('express').Router();
const Users = require('./auth-model')

const { checkValidRegister } = require('../middleware/restricted');

// const bcrypt = require('bcryptjs');                     // This goes wherever we use bcrypt
// const jwt = require('jsonwebtoken');                    // installed this library // used in tokenbuilder
// const { JWT_SECRET } = require('../../config/secrets'); // Some have BCRYPT_ROUNDS, not sure why


// Gets all users = localhost:9000/api/auth
router.get('/', (req, res) => {
    console.log('Get route...')
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get users', error })
        })
});


router.post('/register', checkValidRegister, async (req, res) => {
    console.log('register route 1')
    const { username, password } = req.body;       // Take whatever the user types
    const user = { username, password }

    try {
        console.log('register route 2')
        console.log(user)

        const createdUser = await Users.create(user) // create = Knex* db('users').insert(user)

        console.log('register route 3')
        res.status(201).json(createdUser)            // json = createdUser
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})




router.post('/login', async (req, res) => {
    const { username, password } = req.body;


    try {
        const user = await Users.findBy({ username })

        if (username == user.username) {
            res.status(400).json(user)
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})






module.exports = router;