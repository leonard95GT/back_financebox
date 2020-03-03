'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    type_payment: DataTypes.BOOLEAN,
    titularName: DataTypes.STRING,
    cart_number: DataTypes.INTEGER,
    shelf_life: DataTypes.DATE,
    security_code: DataTypes.INTEGER,
    value: DataTypes.DOUBLE,
    finance_plan_id: DataTypes.INTEGER,
    client_company_id: DataTypes.INTEGER
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};