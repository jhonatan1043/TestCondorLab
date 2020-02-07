const user = require('../controllers/userController');

module.exports = function (app) {

    app.post('/createUser', (req, res) => {
        const userData = {
            userName: req.body.userName,
            email: req.body.email
        }
        user.createUser(userData, (err, data) => {
            res.json(data);
        });
    });

    // return a list of all the users for request, Get
    app.get('/listUsers', (req, res) => {
        user.listUsers((err, data) => {
            res.json(data);
        })
    });

    app.put('/updateUser', (req, res) => {
        const userData = {
            id: req.body.id,
            userName: req.body.userName,
            email: req.body.email
        }  
        user.updateUser(userData, (err, data) => {
            res.json(data);
        })
    })

    app.delete('/deleteUser', (req, res) => {
        user.deleteUser(req.query.id, (err, data) => {
            res.json(data);
        })
    })
}