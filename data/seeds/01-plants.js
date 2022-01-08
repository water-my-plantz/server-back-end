exports.seed = function (knex, Promise) {
    return knex('plants').truncate()
        .then(function () {
            return knex('plants').insert([
                {
                    species: 'Conium maculatum',
                    nickname: 'Hemlock',
                    water_frequency: 'Once every 2 days',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Oenanthe_crocata_kz04.jpg/548px-Oenanthe_crocata_kz04.jpg'
                },
                {
                    species: 'Toxicodendron radicans',
                    nickname: 'Poison Ivy',
                    water_frequency: 'Once a week',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG/360px-2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG'
                },
                {
                    species: 'Solanaceae',
                    nickname: 'Nightshade',
                    water_frequency: 'Once every 3 days',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Illustration_Solanum_dulcamara0_clean.png/447px-Illustration_Solanum_dulcamara0_clean.png'
                }
            ]);
        });
};



// table.integer('plant_id').notNullable()
// table.text('species')
// table.text('nickname')