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
        let string = 'CALL spListTasks()';
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


module.exports = taskModel;