'use strict';

const user_lists = require("../models/user_lists");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // userId: {
      //   type:Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Users',
      //     key:'id' 
      //   }
      // },
      // listId: {
      //   type:Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Lists',
      //     key:'id' 
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Lists');
  }
};