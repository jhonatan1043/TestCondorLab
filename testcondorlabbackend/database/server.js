const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testbd', 'root', 'p0s31d0n', {
      host: 'localhost',
      dialect: 'mysql'
})
try {
      sequelize.authenticate();
      console.log('connection of database')
} catch (err) {
      console.log('not connected', err);
}

module.exports = sequelize;