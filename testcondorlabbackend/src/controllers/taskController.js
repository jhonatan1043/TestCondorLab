//we import the model of our task
const Task = require('../models/task')
const dataBase = require('../../database/server')
const sequelize = require('sequelize')
// we create our object
let taskController = {}

// function to create our tasks
taskController.createTask = (taskData, callBack) => {
    Task.create(taskData)
        .then(() => {
            callBack(null, {
                msg: 'success'
            })
        })
        .catch(err => console.log(err))
}
// function to list our tasks
taskController.listTasks = (taskData, callBack) => {
    dataBase.query("select idTask, title, task, statusTask," +
                   " idUser, 1 As statusRecord FROM tasks" + 
                   " WHERE (statusTask = ? OR statusTask = 3)  AND title LIKE CONCAT('%', ? ,'%');",
        { replacements: [taskData.statusTask, taskData.search], type: sequelize.QueryTypes.SELECT })
        .then(tasks => {
            callBack(null, tasks);
        })
        .catch(err => console.log(err))
}
// function to update our tasks
taskController.updateTask = (taskData, callBack) => {
    Task.update(taskData,
        { where: { idTask: taskData.id } }
    ).then(tasks => {
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
taskController.deleteTask = (dataTask, callBack) => {
    console.log(dataTask)
    Task.destroy({ where: { idTask: dataTask.id } }).then(tasks => {
        callBack(null, tasks);
    })
        .catch(err => console.log(err))
}
//we export the object
module.exports = taskController;