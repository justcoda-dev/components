import { DataTypes } from "sequelize";
import db from "../dataBase.js";

export const Product = db.define(
  "product",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
