import { DataTypes } from "sequelize";
import db from "../dataBase.js";
import { Product } from "./product.model.js";

export const Cart = db.define(
  "cart",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {}
);
Cart.hasMany(Product);
Product.belongsTo(Cart);
