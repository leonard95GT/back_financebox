'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Distribution_Channels', 'projectionId',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'Expenses', 'projectionId',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'Taxes', 'projectionId',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'Salary_positions', 'projectionId',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'Variable_Costs', 'projectionId',
        Sequelize.INTEGER
      )
    
      ])
    

  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Distribution_Channels', 'projectionId',
      ),
      queryInterface.removeColumn(
        'Expenses', 'projectionId',
      ),
      queryInterface.removeColumn(
        'Taxes', 'projectionId',
      ),
      queryInterface.removeColumn(
        'Salary_positions', 'projectionId',
      ),
      queryInterface.removeColumn(
        'Variable_Costs', 'projectionId',
      )
    
      ])

  }
};
