const sequelize = require("../config/config");
const { DataTypes } = require('sequelize');
const Clientes = require("./clientes");

const Contas = sequelize.define('Contas', {
    saldo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Clientes,
            key: 'id',
        }
    }
});

module.exports = Contas;