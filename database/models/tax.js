'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tax = sequelize.define('Tax', {
    name: DataTypes.STRING,
    value: DataTypes.DOUBLE
  }, {});
  Tax.associate = function(models) {
    // associations can be defined here
  };
  return Tax;
};