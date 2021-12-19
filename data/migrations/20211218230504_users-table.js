
// If you add a table you have to npm run down, then npm run up


exports.up = async function (knex) {
    await knex.schema.createTable('users', table => {
        table.increments('user_id') // auto-incrementing id; primary key     
        table.text('username', 128).unique().notNullable()
        table.text('password').unique().notNullable()
        table.text('phoneNumber').unique().notNullable()
        table.text('species')
        table.text('nickname')
        table.text('h2oFrequency')
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users');
};

// npm run up creates the db

// `nickname`: String
// `species` : String
// `h2oFrequency`:          Type determined by implementation  ????????
// `phoneNumber`
// `password`.
