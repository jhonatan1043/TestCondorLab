//we import the model of our user
const user = require('../models/user')

// we create our object
let userController = {}

// function to list our users
userController.listUsers = (callBack) => {
    user.findAll()
        .then(users => {
            callBack(null, users);
        })
        .catch(err => console.log(err))
}
//we export the object
module.exports = userController;