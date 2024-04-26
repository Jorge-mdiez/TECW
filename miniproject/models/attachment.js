'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Attachment extends Model {}
    Attachment.init (
        {
        mime: {
        type: DataTypes.STRING,
        allowNull: true
        },
        url: {
        type: DataTypes.STRING,
        allowNull: true
        },
        image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
        }
    }, {sequelize});
    return Attachment;
};