
const db = require('../../data/db-config') // Database connection // SQLite3 // Knex

module.exports = {
    getAll
}


function getAll() {
    console.log('getAll')
    return db('users')
}
