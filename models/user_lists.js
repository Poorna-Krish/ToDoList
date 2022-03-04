'use strict';
const {
  Model
} = require('sequelize');
const lists = require('./lists');
module.exports = (sequelize, DataTypes) => {
  class UserLists extends Model {
    
    static associate({Lists,UserLists,Users}) {
      UserLists.hasMany(Lists, {foreignKey:'id'});
      UserLists.hasMany(Users, {foreignKey:'id'});
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