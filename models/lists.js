'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tasks, Lists, UserLists, Users}) {
      Lists.hasMany(Tasks, {
        foreignKey: 'list_id'
      })
      Lists.belongsToMany(Users, {through: UserLists, foreignKey: 'list_id', sourceKey: 'id'});
    }
  }
  Lists.init({
    name: {
      type: DataTypes.STRING,
      field:'list_name',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};