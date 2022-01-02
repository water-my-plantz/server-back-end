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
        console.log('username, password in middleware', username, password);
        const valid = Boolean(username && password);

        if (valid) {
            next();
        } else {
            next({
                status: 422,
                message: 'You have made an invalid request',
            });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    checkId,
    checkValidRegister
}