// IMPORT SEQUELIZE LIBRARY AND CONNECTION TO DATABASE
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//INITIALIZE PRODUCT MODEL (TABLE) BY EXTENDING OFF SEQUELIZE'S MODEL CLASS
class Tag extends Model {}


Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//EXPORT
module.exports = Tag;