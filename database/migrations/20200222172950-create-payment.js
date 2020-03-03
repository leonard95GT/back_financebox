'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      type_payment: {
        type: Sequelize.BOOLEAN
      },
      titularName: {
        type: Sequelize.STRING
      },
      cart_number: {
        type: Sequelize.INTEGER
      },
      shelf_life: {
        type: Sequelize.DATE
      },
      security_code: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      finance_plan_id: {
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
    return queryInterface.dropTable('Payments');
  }
};