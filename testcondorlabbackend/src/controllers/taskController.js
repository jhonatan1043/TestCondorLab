const Task = require('../models/task')

let taskController = {}

taskController.createTask = (taskData, callBack) => {
    Task.create({
        title: taskData.title,
        task: taskData.task,
        idUser: taskData.idUser,
        statusTask: taskData.statusTask
    })
        .then(task => {
            callBack(null, task)
        })
        .catch(err => console.log(err))
}

taskController.listTasks = (callBack) => {
    Task.findAll()
        .then(tasks => {
            callBack(null, tasks);
        })
        .catch(err => console.log(err))
}

taskController.updateTask = (taskData, callBack) => {
    Task.update({
        title: taskData.title,
        task: taskData.task,
        idUser: taskData.idUser,
        statusTask: taskData.statusTask,
        updatedAt: Date.now(),
        where: { idTask: id }
    }).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}

taskController.changeStatusTask = (taskData, callBack) => {
    Task.update({
        statusTask: taskData.statusTask,
        updatedAt: Date.now(),
        where: { idTask: id }
    }).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}

taskController.deleteTask = (id, callBack) => {
    Task.destroy({ where: { idTask: id } }).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}

module.exports = taskController;