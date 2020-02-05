//we import the model of our task
const Task = require('../models/task')

// we create our object
let taskController = {}

// function to create our tasks
taskController.createTask = (taskData, callBack) => {
    Task.create(
        { title: taskData.title },
        { task: taskData.task },
        { idUser: taskData.idUser },
        { statusTask: taskData.statusTask })
        .then(task => {
            callBack(null, task)
        })
        .catch(err => console.log(err))
}
// function to list our tasks
taskController.listTasks = (statusTask, callBack) => {
    Task.findAll({ where: { statusTask: statusTask } })
        .then(tasks => {
            callBack(null, tasks);
        })
        .catch(err => console.log(err))
}
// function to update our tasks
taskController.updateTask = (taskData, callBack) => {
    Task.update(
        { title: taskData.title },
        { task: taskData.task },
        { idUser: taskData.idUser },
        { statusTask: taskData.statusTask },
        {
            where: { idTask: id }
        }).then(tasks => {
            callBack(null, tasks);
        })
        .catch(err => console.log(err))
}
//function to change the status of our tasks
taskController.changeStatusTask = (taskData, callBack) => {
    Task.update(
        { statusTask: taskData.statusTask },
        { where: { idTask: taskData.id } }
    ).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}
//function to delete a task our tasks
taskController.deleteTask = (id, callBack) => {
    Task.destroy({ where: { idTask: id } }).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}
//we export the object
module.exports = taskController;