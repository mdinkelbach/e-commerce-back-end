const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Category = require('./Category.js');
const Product = require('./Product.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.STRING,
      references: {
        model: Product,
        key: 'id',
      }
    },
    category_id: {
      type: DataTypes.STRING,
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
    modelName: 'tag',
  }
);

module.exports = Tag;
