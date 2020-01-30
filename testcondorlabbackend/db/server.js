const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p0s31d0n',
    database: 'testbd'
});

module.exports = connection;