'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  UserLists.init({
    
  }, {
    sequelize,
    tableName: 'User_Lists',
    modelName: 'UserLists',
  });
  return UserLists;
};