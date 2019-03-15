const Sequelize = require('sequelize');
const connection = new Sequelize('dbreview', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});


connection
    .authenticate()
    .then( () => console.log('Connection has been established!'))
    .catch(err => console.error(err, 'Unable to connect to the database!'));

module.exports = connection;