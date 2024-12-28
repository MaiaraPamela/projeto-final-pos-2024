const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

// Definição do modelo User
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // Cria colunas de data/hora automaticamente
});

module.exports = User;
