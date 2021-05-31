'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('products','categoryId',{
      type:Sequelize.INTEGER,
        references:{
          model:'categories',
          key:'id'
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      
    })
  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('products','categoryId',{})
  }
}
