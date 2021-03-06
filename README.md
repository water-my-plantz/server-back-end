
VERCEL link:
https://water-my-plants-frontend-9pixds0px-water-my-plantz.vercel.app/

**ENDPOINTS** 

**___USERS___**


Gets all users:
GET = https://water-my-plants-fullstack-api.herokuapp.com/user

Get user by id:
GET = https://water-my-plants-fullstack-api.herokuapp.com/user/:id

Create a new user:
POST = https://water-my-plants-fullstack-api.herokuapp.com/user/register

Log in user:
POST = https://water-my-plants-fullstack-api.herokuapp.com/user/login

Delete user by id:
DELETE = https://water-my-plants-fullstack-api.herokuapp.com/user/:id


**___PLANTS___**

Gets all plant information:
GET = https://water-my-plants-fullstack-api.herokuapp.com/plants

Get plant information by id:
GET = https://water-my-plants-fullstack-api.herokuapp.com/plants/:id

Create plant information:
POST = https://water-my-plants-fullstack-api.herokuapp.com/plants/addplant

UPDATE plant information by id:
PUT = https://water-my-plants-fullstack-api.herokuapp.com/plants/:id

Delete plant information by id:
DELETE = https://water-my-plants-fullstack-api.herokuapp.com/plants/:id



**_________________________________________________**





## ☝️ **Pitch**

Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. 

With an easy to use interface for creating a plant watering schedule tailored to each individual plant, **Water My Plants** will remind users when it's time to feed that foliage and quench your plants' thirst.


## ✅  **MVP**

1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 
2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `phoneNumber` and `password`.



## 🏃‍♀️ **Stretch**
1. Authenticated `user` can set up push notifications to be triggered when an `h2oFrequency` of any `plant` arrives / has elapsed. 
2. Implement a feature that allows an authenticated `user` to see an appropriate suggested `h2oFrequency` based on `species` using the API of your choice. 
3. Authenticated `user` can upload `image`s of a `plant`. If no user `image` is provided, a placeholder `image` of a plant of the same `species` populates the view.






<!-- _______________PERSONAL NOTES BELOW________________ -->

//The .then promise that I no longer use, saved for reference.
// Gets all plant info = localhost:9000/plants
// router.get('/', (req, res) => {
//     console.log('Get route...')
//     Plants.getAll()
//         .then(plants => {
//             res.status(200).json(plants)
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Failed to get users', error })
//         })
// });


// Simplest way to check a login, saving this for future reference.

router.post('/login', async (req, res) => {
    const { username, password } = req.body;


    try {
        const user = await Users.findBy({ username })   // console.log(user) = { id: 3, username: 'Cato', password: '1234' }

        if (username == user.username) {
            res.status(400).json(user)
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})


__Routes before Middleware (for reference)__

// BEFORE MIDDLEWARE - FOR REFERENCE
// Get user by id
// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const user = await Users.findById(id);
//         if (!user) {
//             res.status(404).json({ message: 'User not found' })
//         } else {
//             res.status(200).json(user)
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })



// BEFORE MIDDLEWARE, SAVING FOR REFERENCE
// Delete user by id
// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     // console.log('id', id)

//     try {
//         const user = await Users.remove(id);
//         // console.log('user', user)
//         if (!user) {
//             res.status(404).json({ message: 'User not found' })
//         } else {
//             res.status(200).json('USER DELETED!')
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })





// BEFORE MIDDLEWARE = FOR REFERENCE
// // Update plant data by id.
// router.put('/:id', async (req, res) => {
//     // console.log('req.body', req.body)
//     const id = req.params.id;
//     const { species, nickname, water_frequency, plant_id, } = req.body;    // Take whatever the user types
//     const plantInfo = { species, nickname, water_frequency, plant_id }    // .logs = {species: 'testing species name', nickname: 'testing nickname', water_frequency: undefined, plant_id: 100}

//     // console.log('plantInfo', plantInfo)

//     try {
//         console.log('random word inside try block')
//         const updatedPlant = await Plants.updateById(id, plantInfo)
//         res.status(201).json(updatedPlant)
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })


// BEFORE MIDDLEWARE = FOR REFERENCE
// Get by plant id = localhost:9000/plants/:id
// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     console.log('@@@@@@@@@@@ id', id)

//     try {
//         const plantData = await Plants.findById(id);
//         if (!plantData) {
//             res.status(404).json({ message: 'User not found' })
//         } else {
//             res.status(200).json(plantData)
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })



// BEFORE MIDDLEWARE = FOR REFERENCE
// // Delete plant data by id
// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const plantData = await Plants.remove(id);
//         console.log('user', plantData)

//         if (!plantData) {
//             res.status(404).json({ message: 'Plant information not found' })
//         } else {
//             res.status(200).json('PLANT INFORMATION DELETED!')
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })










// _____________________

My old dependencies in case all else fails...

    "up": "knex migrate:up",
    "down": "knex migrate:down",
    
    
// _____________________
    
## **RESOURCES***

Resource for Heroku and initial set up from scratch: https://www.youtube.com/watch?v=-mcM5GB8OIA&t=1901s

Resource for creating a database from scratch, from unit 4.2: 

Legacy = https://learn-legacy.bloomtech.com/web4node/sprint/receFLR7MpwQXesIN

Schema, Migrations, Seeds:
Guided Project: https://www.youtube.com/watch?v=IDPswEgDino

Solution: https://bloomtech-1.wistia.com/medias/3b4mk5id5d

&&

Create Table Relationships Using Knex:
Guided Project: https://www.youtube.com/watch?v=G0lEIBHxI1I 

Solution: https://bloomtech-1.wistia.com/medias/hlle9o4z0x






-----------------------------------------------------------------------------------
