const sequelize = require("../config/config");
const { DataTypes } = require('sequelize');
const Contas = require("./contas");
const Transacao = sequelize.define('Transacao', {
    tipoConta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoTrans: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type:DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    contaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contas,
            key: 'id',
        }
    }
});

module.exports = Transacao;