'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_Lists', [
      { 
        user_id: 1,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op; 
    await queryInterface.bulkDelete('User_Lists',{[Op.and]: [{listId: 1}, {userId: 1}]});
  }
};
