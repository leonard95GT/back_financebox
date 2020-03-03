'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixed_income_last_year: {
        type: Sequelize.DOUBLE
      },
      grow_up_type: {
        type: Sequelize.INTEGER
      },
      grow_up_value: {
        type: Sequelize.DOUBLE
      },
      grow_up_percent: {
        type: Sequelize.DOUBLE
      },
      ebitda_type: {
        type: Sequelize.INTEGER
      },
      ebitda_value: {
        type: Sequelize.DOUBLE
      },
      ebitda_percent: {
        type: Sequelize.DOUBLE
      },
      company_id: {
        type:Sequelize.INTEGER
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
    return queryInterface.dropTable('projections');
  }
};