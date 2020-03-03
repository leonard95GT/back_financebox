'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goals = sequelize.define('Goals', {
    gross_profit_last_year: DataTypes.INTEGER,
    gross_profit_last_year_value: DataTypes.INTEGER,
    gross_profit_year: DataTypes.INTEGER,
    gross_profit_value: DataTypes.INTEGER,
    client_company_id: DataTypes.INTEGER
  }, {});
  Goals.associate = function(models) {
    // associations can be defined here
  };
  return Goals;
};