//IMPORT SEQUELIZE LIBRARY AND CONNECTION TO DATABASE
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//INITIALIZE PRODUCT MODEL (TABLE) BY EXTENDING OFF SEQUELIZE'S MODEL CLASS
class ProductTag extends Model {}

//SET UP FIELDS AND RULES FOR PRODUCT MODEL
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },

    product_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'product',
        key:'id'
        }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'tag',
        key:'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

//EXPORT
module.exports = ProductTag;