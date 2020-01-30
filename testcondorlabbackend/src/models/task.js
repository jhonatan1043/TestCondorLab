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
taskModel.listTask = (taskData, callback) => {
    if (connection) {
        let status = connection.escape(taskData.status);
        let string = 'CALL spListTasks (' + status + ')';
        console.log(string);
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