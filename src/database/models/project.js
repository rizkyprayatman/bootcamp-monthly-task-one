'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        as: 'categories',
        foreignKey: 'categoryId'
      });

      this.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'id'
      });


    }
  }
  Project.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
  });
  return Project;
};