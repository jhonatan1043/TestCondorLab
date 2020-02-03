const connection = require('../../db/server');

let taskModel = {};

taskModel.createTasks = (taskData, callback) => {
    if (connection) {
        connection.query('INSERT INTO tasks SET ?', taskData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        "msg": 'success'
                    });
                }
            }
        );
    };
};
//list the tasks according to the status received
taskModel.listTask = (callback) => {
    if (connection) {
        let string = 'SELECT idTask AS id,title,task,idUser,statusTask, 1 statusRegistry FROM testbd.tasks';
        connection.query(string,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, result);
                }
            });
    }
};

taskModel.uptateTasks = (taskData, callback) => {
    if (connection) {
        connection.query('UPDATE tasks SET ?', taskData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        "msg": 'success'
                    });
                }
            }
        );
    };
};

taskModel.changeStatusTask = (taskData, callback) => {
    if (connection) {
        connection.query('UPDATE tasks SET ?', taskData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        "msg": 'success'
                    });
                }
            }
        );
    };
};

taskModel.deleteTask = (id, callback) => {
    if (connection) {
        let string = 'DELETE FROM task SET ?';
        connection.query(string, id,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, result);
                }
            })
    }
};


module.exports = taskModel;