exports.seed = function (knex, Promise) {
    return knex('users').truncate()
        .then(function () {
            return knex('users').insert([
                {
                    username: 'Seneca',
                    password: '1234',
                    phone_number: '1234567890'
                },
                {
                    username: 'Epictetus',
                    password: '1234',
                    phone_number: '1234567890'
                }
            ]);
        });
};