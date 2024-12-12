const sequelize = require("../config/config");
const { DataTypes } = require('sequelize');
const Clientes = sequelize.define('Clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Clientes;