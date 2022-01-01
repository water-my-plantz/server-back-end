const router = require('express').Router();
const Plants = require('./plants-model');


// Gets all plant info = localhost:9000/api/plants
router.get('/', (req, res) => {
    console.log('Get route...')
    Plants.getAll()
        .then(plants => {
            res.status(200).json(plants)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get users', error })
        })
});


// Get by plant id = localhost:9000/api/plants/:id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('@@@@@@@@@@@ id', id)

    try {
        const plantData = await Plants.findById(id);
        if (!plantData) {
            res.status(404).json({ message: 'User not found' })
        } else {
            res.status(200).json(plantData)
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Create plant data
router.post('/addplant', async (req, res) => {
    const { species, nickname, water_frequency, plant_id } = req.body;    // Take whatever the user types
    const plantInfo = { species, nickname, water_frequency, plant_id }    // .logs = {species: 'testing species name', nickname: 'testing nickname', water_frequency: undefined, plant_id: 100}

    try {
        // console.log('random word inside try block')
        const createdPlant = await Plants.create(plantInfo)
        res.status(201).json(createdPlant)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// Delete plant data by id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    console.log('id', id)

    try {
        const plantData = await Plants.remove(id);
        console.log('user', plantData)

        if (!plantData) {
            res.status(404).json({ message: 'Plant information not found' })
        } else {
            res.status(200).json('PLANT INFORMATION DELETED!')
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Update plant data by id
router.put('/:id', async (req, res) => {
    console.log('req.body', req.body)
    const id = req.params.id;
    const { species, nickname, water_frequency, plant_id, } = req.body;    // Take whatever the user types

    const plantInfo = { species, nickname, water_frequency, plant_id }    // .logs = {species: 'testing species name', nickname: 'testing nickname', water_frequency: undefined, plant_id: 100}

    console.log('plantInfo', plantInfo)

    try {
        console.log('random word inside try block')
        const updatedPlant = await Plants.updateById(id, plantInfo)
        res.status(201).json(updatedPlant)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})







module.exports = router;





// 1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`.
// 2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
// 3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties:
//     - `id`: Integer
//     - `nickname`: String
//     - `species` : String
//     - `h2oFrequency`: Type determined by implementation
//     - `image`: (optional)
// 4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`.
// 5. Authenticated `user` can update their `phoneNumber` and `password`.
