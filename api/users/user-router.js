const router = require('express').Router();
const Users = require('./user-model')
const generateToken = require('./token-generator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')              // installed this library // used in token builder
const { JWT_SECRET } = require('../../secrets'); // Some have BCRYPT_ROUNDS, not sure why

const { checkId, checkValidRegister } = require('./user-middleware');


// Gets all users. = localhost:9000/user
router.get('/', async (req, res) => {
    try {
        const users = await Users.getAll()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Get user by id. = localhost:9000/user/:id
router.get('/:id', checkId, async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.status(200).json(user)
})


// Register a new user. = localhost:9000/user/register
router.post('/register', checkValidRegister, async (req, res) => {
    const { username, password } = req.body;       // Take whatever the user types
    const user = { username, password }
    // console.log('user.password', user.password)
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;

    try {
        const createdUser = await Users.create(user) // create = Knex* db('users').insert(user)
        res.status(201).json(createdUser)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Login a user. = localhost:9000/user/login
// Uses a token generator
router.post('/login', async (req, res) => {
    const { username, password } = req.body;            // .logs Aurelius 1234

    try {
        const user = await Users.findBy({ username })   // .logs = { id: 3, username: 'Aurelius', password: '1234' }

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);          // .logs = eyJhbGciOiJIUzI1NiIsInR5cCI6...
            res.status(200).json({ message: `Welcome back ${user.username}!`, token })

        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Delete user by id. = localhost:9000/user/:id
router.delete('/:id', checkId, async (req, res) => {
    await Users.remove(req.params.id);
    res.status(200).json('User has been deleted')
})



module.exports = router;