const connection = require('../../db/server');

let userModel = {};

userModel.listUsers = (callback) => {
    if (connection) {
        connection.query(
            'SELECT IdUser,UserName,Email FROM testbd.users;',
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, result);
                }
            }
        );
    }
};

module.exports = userModel;