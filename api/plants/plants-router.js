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



router.post('/addplant', async (req, res) => {
    console.log('register route 1', req.body)
    // const { species, nickname, h2oFrequency } = req.body;       // Take whatever the user types
    // const plantInfo = { species, nickname, h2oFrequency }

    // console.log('plantInfo', plantInfo.species)

    // try {
    //     console.log('register route 2')
    //     console.log('plantInfo = ', plantInfo)

    //     const createdPlant = await Plants.create(plantInfo)

    //     console.log('register route 3')
    //     res.status(201).json(createdPlant)

    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }
})



// // Add plant
// router.post('/', reqBody, async (req, res, next) => {
//     try {
//         let plant = await Plant.add(req.body)
//         res.status(201).json(plant)
//     } catch (err) {
//         next({ apiCode: 500, apiMessage: 'Error Creating Plant!', ...err })
//     }
// })





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
