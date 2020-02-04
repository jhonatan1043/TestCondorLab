const user = require('../models/user')

let userController = {}

userController.listUsers = (callBack) => {
    user.findAll()
        .then(users => {
            callBack(null, users);
        })
        .catch(err => console.log(err))
}


module.exports = userController;