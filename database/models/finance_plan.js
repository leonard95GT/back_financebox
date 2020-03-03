'use strict';
module.exports = (sequelize, DataTypes) => {
  const Finance_plan = sequelize.define('Finance_plan', {
    type_plan: DataTypes.INTEGER,
    period: DataTypes.DATE,
    purchase: DataTypes.DOUBLE
  }, {});
  Finance_plan.associate = function(models) {
    // associations can be defined here
  };
  return Finance_plan;
};