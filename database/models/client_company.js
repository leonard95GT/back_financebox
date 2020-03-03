'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client_company = sequelize.define('Client_company', {
    cnpj: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  Client_company.associate = function(models) {
    // associations can be defined here
    
  };
  return Client_company;
};