import { DataTypes } from "sequelize";
import db from "../dataBase.js";
import { Product } from "./product.model.js";

export const Category = db.define(
  "category",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);
// Product
Category.hasMany(Product);
Product.belongsTo(Category);
