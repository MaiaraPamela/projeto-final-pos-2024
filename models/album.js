const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Album = sequelize.define('Album', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Album;
