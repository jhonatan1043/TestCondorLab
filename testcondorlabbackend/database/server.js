// we import Sequelize
const { Sequelize } = require('sequelize')

/*we instantiate Sequelize and 
  establish the connection, with its parameters*/
const sequelize = new Sequelize('testbd', 'root', 'p0s31d0n', {
      host: 'localhost',
      dialect: 'mysql'
})

//we verify the connection
try {
      sequelize.authenticate();
      console.log('connected to the database')
} catch (err) {
      console.log('not connected', err);
}

// we export sequelize
module.exports = sequelize;