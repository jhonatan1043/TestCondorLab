//we import sequelize and and the database
const { Sequelize } = require('sequelize')
const dataBase = require('../../database/server')
/* we define our users table 
   with all its fields y la exportamos
*/
module.exports = dataBase.define('users', {
  idUser: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userName: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
  }
}); // end

