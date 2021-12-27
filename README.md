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




________________________________________

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




_________________________________________


From build week scaffolding video:

{
  "name": "build-week-scaffolding-node",
  "version": "1.0.0",

  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "seed": "knex seed:run",

    "test": "cross-env NODE_ENV=testing jest --verbose --runInBand",


    "migrate": "knex migrate:latest",
    "rollback": "knex migrate:rollback",
    "migrateh": "heroku run knex migrate:latest -a YOUR_HEROKU_APP_NAME",
    "rollbackh": "heroku run knex migrate:rollback -a YOUR_HEROKU_APP_NAME",
    "databaseh": "heroku pg:psql -a YOUR_HEROKU_APP_NAME",
    "seedh": "heroku run knex seed:run -a YOUR_HEROKU_APP_NAME",
    "deploy": "git push heroku main"
  },
  "engines": {
    "node": "16.13.1"
  },
  "license": "ISC",
  "dependencies": {
    "cors": "2.8.5",
    "dotenv": "10.0.0",
    "express": "4.17.1",
    "helmet": "4.6.0",
    "knex": "0.95.14",
    "knex-cleaner": "1.3.1",
    "pg": "8.7.1"
  },
  "devDependencies": {
    "@types/jest": "27.0.3",
    "cross-env": "7.0.3",
    "eslint": "8.4.1",
    "jest": "27.4.4",
    "nodemon": "2.0.15",
    "supertest": "6.1.6"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bloominstituteoftechnology/build-week-scaffolding-node.git"
  }
}





// _____________________

My old dependencies in case all else fails...

    "up": "knex migrate:up",
    "down": "knex migrate:down",