const router = require('express').Router();
const Plants = require('./plants-model');
const { checkId, checkPayload } = require('./plants-middleware');



// Gets all plant info. = localhost:9000/plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plants.getAll()
        res.status(200).json(plants)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Get by plant id. = localhost:9000/plants/:id
router.get('/:id', checkId, async (req, res) => {
    const plantData = await Plants.findById(req.params.id)
    res.status(200).json(plantData)
})


// Create plant data. = localhost:9000/plants/addplant
router.post('/addplant', checkPayload, async (req, res) => {
    const createdPlant = await Plants.create(req.body)
    res.status(201).json(createdPlant)
})


// Update plant data by id. = localhost:9000/plants/:id
router.put('/:id', checkId, async (req, res) => {
    const updatedPlant = await Plants.updateById(req.params.id, req.body)
    res.status(200).json(updatedPlant)
})


// Delete plant data by id. = localhost:9000/plants/:id
router.delete('/:id', checkId, async (req, res) => {
    const id = req.params.id;
    await Plants.remove(id)
    res.status(204).json(`Plant id: ${id} information has been removed.`)
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




// _______________________________________________




// For reference here are some routes I have used in the past:

// const express = require('express')
// const Post = require('./post-model')

// const router = express.Router()



// function checkId(req, res, next) {
//   next()
// }

// function checkPayload(req, res, next) {
//   next()
// }

// router.get('/', async (req, res, next) => {
//   try {
//     const data = await Post.get()
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/:id', checkId, async (req, res, next) => {
//   try {
//     const data = await Post.getById(req.params.id)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', checkPayload, async (req, res, next) => {
//   try {
//     const data = await Post.create(req.body)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:id', checkPayload, checkId, async (req, res, next) => {
//   try {
//     const data = await Post.update(req.params.id, req.body)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:id', checkId, async (req, res, next) => {
//   try {
//     const data = await Post.remove(req.params.id)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// router.use((err, req, res, next) => { // eslint-disable-line
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   })
// })

// module.exports = router