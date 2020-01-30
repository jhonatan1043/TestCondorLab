const task = require('../models/task');

module.exports = function (app) {

    // create Task
    app.post('/createTask', (req, res) => {
        const taskData = {
            task: req.body.task,
            title: req.body.title
        };
        task.createTasks(taskData, (err, data) => {
            res.json(data);
        });
    });

    // List task open
    app.get('/listTask', (req, res) => {
        task.listTask(req.body, (err, data) => {
                res.json(data);
        });
    });
}