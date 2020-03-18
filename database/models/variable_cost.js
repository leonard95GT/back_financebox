'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variable_Cost = sequelize.define('Variable_Cost', {
    title: DataTypes.STRING,
    value_year: DataTypes.FLOAT,
    typeCost: DataTypes.BOOLEAN
  }, {});
  Variable_Cost.associate = function(models) {
    // associations can be defined here
  };
  return Variable_Cost;
};