const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('departamento_ti', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;