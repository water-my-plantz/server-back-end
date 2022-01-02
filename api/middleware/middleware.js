const Users = require('../users/user-model.js');
// const Plants = require('../plants/plants-model.js');






async function checkId(req, res, next) {
    const id = req.params.id;

    try {
        const user = await Users.findById(id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}











module.exports = {
    checkId
}