'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salary_position = sequelize.define('Salary_position', {
    title: DataTypes.STRING,
    value_year: DataTypes.FLOAT
  }, {});
  Salary_position.associate = function(models) {
    // associations can be defined here
  };
  return Salary_position;
};