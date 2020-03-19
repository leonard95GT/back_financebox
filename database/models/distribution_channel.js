'use strict';
module.exports = (sequelize, DataTypes) => {
  const Distribution_Channel = sequelize.define('Distribution_Channel', {
    channelName: DataTypes.STRING,
    categoryProduct: DataTypes.STRING,
    salesQt: DataTypes.INTEGER,
    salesPrice: DataTypes.FLOAT,
    costType: DataTypes.INTEGER,
    projection_id: DataTypes.INTEGER,
    cpv_feedstock: DataTypes.FLOAT,
    cpv_indirect_cost: DataTypes.FLOAT,
    cpv_labor: DataTypes.FLOAT,
    total_cost: DataTypes.FLOAT,
  }, {});
  Distribution_Channel.associate = function(models) {
    // associations can be defined here
  };
  return Distribution_Channel;
};