const sequelize = require("../config/config");
const { DataTypes } = require('sequelize');
const Clientes = require("./clientes");

const Notificacoes = sequelize.define('Notificacoes', {
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNot: {
        type: DataTypes.DATE,
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

module.exports = Notificacoes;