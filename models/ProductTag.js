const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Category = require('./Category.js');
const Product = require('./Product.js');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
