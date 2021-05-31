'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('categories', [{
       name: 'sabun',
       category_code: 'sbn',
       createdAt: new Date(),
       updatedAt: new Date(),
   },
   {
    name: 'susu',
    category_code: 'ss',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'snack',
    category_code: 'sck',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
  name: 'minyak',
  category_code: 'myk',
  createdAt: new Date(),
  updatedAt: new Date(),
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  }
};
