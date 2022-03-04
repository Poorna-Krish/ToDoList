'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLists extends Model {
    
    static associate(models) {
      
    }
  }
  UserLists.init({
    
  }, 
  {
    sequelize,
    tableName: 'User_Lists',
    modelName: 'UserLists',
  });
  return UserLists;
};