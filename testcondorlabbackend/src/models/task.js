const { Sequelize } = require('sequelize')
const dataBase =require('../../database/server');

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
})