'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    static associate({Tasks, Lists}) {
      Tasks.belongsTo(Lists, {
        foreignKey:'list_id',
        onDelete: 'cascade'
      })
    }
  }
  Tasks.init({
    listId: {
      type: DataTypes.INTEGER,
      field:'list_id',
      foreignKey: 'list_id',
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};