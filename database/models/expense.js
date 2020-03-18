'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
    title: DataTypes.STRING,
    value_year: DataTypes.FLOAT,
    typeExpense: DataTypes.BOOLEAN
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};