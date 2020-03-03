'use strict';
module.exports = (sequelize, DataTypes) => {
  const projection = sequelize.define('projection', {
    fixed_income_last_year: DataTypes.DOUBLE,
    grow_up_type: DataTypes.INTEGER,
    grow_up_value: DataTypes.DOUBLE,
    grow_up_percent: DataTypes.DOUBLE,
    ebitda_type: DataTypes.INTEGER,
    ebitda_value: DataTypes.DOUBLE,
    ebitda_percent: DataTypes.DOUBLE,
    company_id:DataTypes.INTEGER
  }, {});
  projection.associate = function(models) {
    // associations can be defined here
  };
  return projection;
};