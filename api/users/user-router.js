const router = require('express').Router();
const bcrypt = require('bcryptjs')

const Users = require('./user-model')
const generateToken = require('./token-generator')
const { checkId, checkValidRegister } = require('./user-middleware');
const restricted = require("./restricted-middleware")


// Authorization/access, not being used here but if we had a role field with user and admin, 


// we could use this to see who has access to what.
// const only = (role) => (req, res, next) => {
//     if (req.decodedToken.role === role) {
//         next()
//     } else {
//         next({ status: 403, message: 'Only admins have access.' })
//     }
// }


// Gets all users. = localhost:9000/user
router.get('/', restricted, async (req, res) => {

    console.log(`The username is ${req.decodedToken.username}`)

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
        const token = generateToken(createdUser);    // maybe..... Just added.... 
        if (password.length) {
            res.status(201).json({ createdUser, token })
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Uses a token generator*
// Login a user. = localhost:9000/user/login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;            // .logs Aurelius 1234

    try {
        const user = await Users.findBy({ username })   // .logs = { id: 3, username: 'Aurelius', password: '1234' }

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);          // .logs = eyJhbGciOiJIUzI1NiIsInR5cCI6...
            res.status(200).json({
                username: user.username,
                id: user.id,
                token: token
            })

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