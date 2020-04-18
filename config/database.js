const Sequelize = require('sequelize');

module.exports = new Sequelize('FindIT', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});