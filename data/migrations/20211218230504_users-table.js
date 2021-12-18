
exports.up = async function (knex) {
    await knex.schema.createTable('users', table => {
        table.increments('user_id') // auto-incrementing id; primary key
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users');
};


// npm run up creates the db