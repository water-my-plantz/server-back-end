exports.seed = function (knex, Promise) {
    return knex('plants').truncate()
        .then(function () {
            return knex('plants').insert([
                {
                    species: 'Conium maculatum',
                    nickname: 'Hemlock',
                    plant_id: '18',
                    water_frequency: 'Once every 2 days'
                },
                {
                    species: 'Toxicodendron radicans',
                    nickname: 'Poison Ivy',
                    plant_id: '50',
                    water_frequency: 'Once a week'
                },
                {
                    species: 'Solanaceae',
                    nickname: 'Nightshade',
                    plant_id: '66',
                    water_frequency: 'Once every 3 days'
                }
            ]);
        });
};



// table.integer('plant_id').notNullable()
// table.text('species')
// table.text('nickname')