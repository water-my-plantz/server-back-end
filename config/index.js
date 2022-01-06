
// This is to centralize environment variables. So we do not have to type out process.env each time we need it inside out app.

module.exports = {
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET || "long random string of happiness",    // This gets used in the tokenBuilder "JWT_SECRET" and imported!
    BCRYPT_ROUNDS: process.env.num || 8
};