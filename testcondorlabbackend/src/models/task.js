//we import sequelize and and the database
const { Sequelize } = require('sequelize')
const dataBase =require('../../database/server');
/* we define our tasks table 
   with all its fields y la exportamos
*/
module.exports = dataBase.define("tasks", {
    idTask: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    task: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    idUser: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    statusTask: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    }
}) // end