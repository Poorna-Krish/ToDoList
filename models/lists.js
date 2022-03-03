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
    static associate(models) {
      // define association here
    }
  }
  Lists.init({
    name: {
      type: DataTypes.STRING,
      field:'list_name'
    }
  }, {
    sequelize,
    modelName: 'Lists',
  });
  return Lists;
};