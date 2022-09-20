import { DataTypes } from "sequelize";
import db from "../dataBase.js";

export const Role = db.define(
  "role",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "role by userApi",
    },
  },
  {}
);
