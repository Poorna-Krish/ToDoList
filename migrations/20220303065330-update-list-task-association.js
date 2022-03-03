'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'list_id',{ 
      type: Sequelize.INTEGER,
      references: {
        model: 'Lists', 
        key: 'id', 
      }, 
      onDelete: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks','list_id');
  }
};
