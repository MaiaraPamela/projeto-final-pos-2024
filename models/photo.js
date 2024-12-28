const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Photo = sequelize.define('Photo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Photo;
