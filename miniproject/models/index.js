const Sequelize = require("sequelize");
const sequelize = new Sequelize('sqlite:blog.sqlite')
const Post = require('./post')(sequelize);
const Attachment = require('./attachment')(sequelize);

//Definimos las relaciones

Attachment.hasOne(Post, {as: 'post', foreignKey: 'attachmentId'});
Post.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});

module.exports = {
    sequelize, Post, Attachment
};