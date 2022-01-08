const { json } = require('express/lib/response');
const Users = require('./user-model.js');


async function checkId(req, res, next) {
    const id = req.params.id;

    try {
        const user = await Users.findById(id);

        if (!user) {
            res.status(404).json({ message: 'User ID not found' });
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



checkValidRegister = async (req, res, next) => {

    await console.log('THIS WORKS?')
    try {
        const { username, password } = await req.body;
        console.log('inside checkValidRegister')

        if (username === undefined || typeof username !== 'string' || !username.trim()
            || password === undefined || typeof password !== 'string' || !password.trim()
        ) {
            res.status(400).json({
                message: err.message,
                massage: 'Proper username and password required.'
            })
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    checkId,
    checkValidRegister
}