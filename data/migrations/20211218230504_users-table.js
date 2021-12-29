
// If you add a table you have to npm run down, then npm run up

// npm run up creates the db (not on this build)
// `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 

// Production never has migrate down, only up.

exports.up = async function (knex) {
    await knex.schema.createTable('users', table => {
        table.increments() // auto-incrementing id; primary key     
        table.text('username', 128).unique().notNullable()
        table.text('password').notNullable()
    })
        .createTable('plants', table => {
            table.text('species')
            table.text('nickname')
            table.text('h2oFrequency')
        })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users')
    await knex.schema.dropTableIfExists('plants')
};





























// FROM LAST BUILD:

// exports.up = function (knex) {
//     return knex.schema
//         .createTable('users', (tbl) => {
//             tbl.increments()
//             tbl.string('username').unique().notNullable()
//             tbl.string('password').notNullable()
//             tbl.string('phone_number')
//         })
//         .createTable('plants', (tbl) => {
//             tbl.increments()
//             tbl.string('nickname')
//             tbl.string('species')
//             tbl.string('h2o_frequency')
//             tbl.string('image')
//         })
//         .createTable('users_plants', (tbl) => {
//             tbl.increments()
//             tbl.integer('user_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('id')
//                 .inTable('users')
//                 .onDelete('CASCADE')
//                 .onUpdate('CASCADE')
//             tbl.integer('plant_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('id')
//                 .inTable('plants')
//                 .onDelete('CASCADE')
//                 .onUpdate('CASCADE')
//         })
// }

// exports.down = function (knex) {
//     return knex.schema
//         .dropTableIfExists('users_plants')
//         .dropTableIfExists('plants')
//         .dropTableIfExists('users')
// }