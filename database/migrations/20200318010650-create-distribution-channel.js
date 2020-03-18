'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Distribution_Channels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      channelName: {
        type: Sequelize.STRING
      },
      categoryProduct: {
        type: Sequelize.STRING
      },
      salesQt: {
        type: Sequelize.INTEGER
      },
      salesPrice: {
        type: Sequelize.FLOAT
      },
      costType: {
        type: Sequelize.INTEGER
      },
      projection_id: {
        type: Sequelize.INTEGER
      },
      cpv_feedstock: {
        type: Sequelize.FLOAT
      },
      cpv_indirect_cost: {
        type: Sequelize.FLOAT
      },
      cpv_labor: {
        type: Sequelize.FLOAT
      },
      total_cost: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Distribution_Channels');
  }
};