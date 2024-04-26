'use strict';

/** @type {import('sequelize-cli).Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'Attachments',
    {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull:false,
          autoIncrement: true,
          unique: true},

      createdAt: {
          type: Sequelize.DATE,
          allowNull: false},

      updatedAt: {
          type: Sequelize.DATE,
          allowNull: false},

      mime: {
          type: Sequelize.STRING,
          allowNull:true},

      url: {
          type: Sequelize.STRING,
          allowNull:true},

      image: {
          type: Sequelize.BLOB,
        allowNull:true}
    },
    {sync: {force: true}});},

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Attachments');
 }
};