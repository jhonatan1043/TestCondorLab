const taskController = require('../controllers/taskController')

module.exports = function (app) {
    // create Task
    app.post('/createTask', (req, res) => {
        const taskData = {
            title: req.body.title,
            task: req.body.task,
            idUser: req.body.idUser,
            statusTask: req.body.statusTask
        };
        taskController.createTask(taskData, (err, data) => {
            res.json(data);
        });
    });
    // list all the task
    app.get('/listTask', (req, res) => {
        const taskData = {
            statusTask: req.query.statusTask,
            search: req.query.search
        }
        taskController.listTasks(taskData, (err, data) => {
            res.json(data);
        });
    });
    // update a task of the list
    app.put('/updateTask', (req, res) => {
        const taskData = {
            id: req.body.id,
            task: req.body.task,
            title: req.body.title,
            idUser: req.body.idUser,
            statusTask: req.body.statusTask
        };
        taskController.updateTask(taskData, (err, data) => {
            res.json(data);
        });
    });
    // change status of a task
    app.put('/changeStatusTask', (req, res) => {
        const taskData = {
            id: req.body.id,
            statusTask: req.body.statusTask
        };
        taskController.changeStatusTask(taskData, (err, data) => {
            res.json(data);
        });
    });
    // delete a task of the list
    app.delete('/deleteTask', (req, res) => {
        taskController.deleteTask(req.query, (err, data) => {
            res.json(data);
        })
    })
}