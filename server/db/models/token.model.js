import { DataTypes } from "sequelize";
import db from "../dataBase.js";

export const Token = db.define(
  "token",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {}
);
