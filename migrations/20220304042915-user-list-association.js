'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('User_Lists', 'user_id', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'Users', 
        key: 'id', 
      }, 
      onDelete: 'cascade'
    });
    await queryInterface.addColumn('User_Lists', 'list_id', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'Lists', 
        key: 'id', 
      }, 
      onDelete: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('User_Lists','user_id');
    await queryInterface.removeColumn('User_Lists','list_id');
  }
};
