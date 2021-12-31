const db = require('../../data/db-config') // Database connection // SQLite3 // Knex

module.exports = {
    findById,
    create,
    getAll,
    findBy,
    remove
}


function getAll() {
    return db('plants')
}


function findBy(argFilter) {
    // console.log(typeof argFilter)
    return db('plants').where(argFilter).first();            // without first it needs to be an array at the end point
}


function findById(idArg) {
    return db("plants").where({ id: idArg }).first();        // always .first when you want 1 thing
}


async function create(argTask) {
    const [species] = await db('plants').insert(argTask, ['*']); // This was different due to being Postgres
    return species
}

// // Add plant to DB
// const add = async (plant) => {
//     const [id] = await db('plants').returning('id').insert(plant)
//     return findById(id)
// }

// delete function  // In SQL it looks like: DELETE FROM users WHERE id = 2;
async function remove(id) {
    const deletedPlantData = await db('plants').where({ id: id }).del()
    return deletedPlantData;
}





