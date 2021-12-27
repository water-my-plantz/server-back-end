const router = require('express').Router();
const Users = require('./auth-model')
const bcrypt = require('bcryptjs')

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

    console.log('user.password', user.password)
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;


    try {
        console.log('register route 2')
        console.log('user', user)

        const createdUser = await Users.create(user) // create = Knex* db('users').insert(user)

        console.log('register route 3')
        res.status(201).json(createdUser)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})






router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('username', username) // Aurelius


    try {
        const user = await Users.findBy({ username })   // console.log(user) = { id: 3, username: 'Cato', password: '1234' }

        console.log('user', user) // object of id, username, password.

        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: `Welcome ${user.username}`, user })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})




module.exports = router;