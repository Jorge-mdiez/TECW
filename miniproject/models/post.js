'use strict' ;
const {Model, DataTypes} =require('sequelize');

module.exports = (sequelize) => {
    class Post extends Model {}
    Post.init({
        title:{
            type: DataTypes.STRING,
            validate: {notEmpty: {msg:'El título no puede estar en blanco.'}}
        },
        body:{
            type: DataTypes.TEXT,
            validate: {notEmpty: {msg:'El cuerpo no puede estar en blanco.'}}
        },
        attachmentId:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {sequelize});
    return Post;
};