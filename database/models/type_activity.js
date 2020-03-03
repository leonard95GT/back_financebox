'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type_activity = sequelize.define('Type_activity', {
    activity: DataTypes.STRING,
    activity_id: DataTypes.INTEGER
  }, {});
  Type_activity.associate = function(models) {
    // associations can be defined here
  };
  return Type_activity;
};