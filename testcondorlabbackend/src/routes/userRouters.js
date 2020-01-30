const user = require('../models/user');

module.exports = function (app) {

    // return a list of all the users for request, Get
    app.get('/listUsers', (req, res) => {
        user.listUsers((err, data) => {
            res.json(data);
        })
    });
    
}