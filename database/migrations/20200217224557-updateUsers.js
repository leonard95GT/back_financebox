'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
    queryInterface.addColumn(
      'Users',
      'phone',
      Sequelize.INTEGER
    ),
    queryInterface.addColumn(
      'Users',
      'level',
      Sequelize.BOOLEAN
    )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Users',
      'phone',
    );
    queryInterface.removeColumn(
      'Users',
      'level',
    );


  }
};
