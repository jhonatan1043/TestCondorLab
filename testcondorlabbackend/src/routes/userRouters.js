const user = require('../controllers/userController');

module.exports = function (app) {

    // return a list of all the users for request, Get
    app.get('/listUsers', (req, res) => {
        user.listUsers((err, data) => {
            res.json(data);
        })
    });
}