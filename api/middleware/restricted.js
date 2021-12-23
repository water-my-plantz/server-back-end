


exports.checkValidRegister = async (req, res, next) => {

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