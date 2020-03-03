'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    client: DataTypes.STRING,
    product_service: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unit_price: DataTypes.DOUBLE,
    total_price: DataTypes.DOUBLE,
    client_company_id: DataTypes.INTEGER
  }, {});
  Sales.associate = function(models) {
    // associations can be defined here
  };
  return Sales;
};