//we import the model of our user
const user = require('../models/user')

// we create our object
let userController = {}

userController.createUser = (userData, callBack) => {
    user.create(userData)
        .then(() => {
            callBack(null, {
                msg: 'success'
            })
        })
        .catch(err => console.log(err));
};

// function to list our users
userController.listUsers = (callBack) => {
    user.findAll()
        .then(users => {
            callBack(null, users);
        })
        .catch(err => console.log(err));
};

userController.updateUser = (userData, callBack) => {
    user.update(userData,
        { where: { idUser: userData.id } })
        .then(() => {
            callBack(null, {
                msg: 'success'
            })
        })
        .catch(err => console.log(err));
};

userController.deleteUser = (id, callBack) => {
    user.destroy({ where: { idUser: id } })
        .then(() => {
            callBack(null, {
                msg: 'success'
            })
        })
};

//we export the object
module.exports = userController;