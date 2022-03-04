'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Surabhi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: 'Arya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'Nila',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', null, {name: {[Op.in]: ['Arya', 'Surabhi', 'Nila']}});
  }
};
