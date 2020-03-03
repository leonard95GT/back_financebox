'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      gross_profit_last_year: {
        type: Sequelize.INTEGER
      },
      gross_profit_last_year_value: {
        type: Sequelize.INTEGER
      },
      gross_profit_year: {
        type: Sequelize.INTEGER
      },
      gross_profit_value: {
        type: Sequelize.INTEGER
      },
      client_company_id: {
        type: Sequelize.INTEGER
      },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Goals');
  }
};