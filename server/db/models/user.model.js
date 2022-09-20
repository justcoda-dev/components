import { DataTypes } from "sequelize";
import db from "../dataBase.js";
import { Cart } from "./cart.model.js";
import { Role } from "./role.model.js";
import { Token } from "./token.model.js";

export const User = db.define(
  "user",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    is_activated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    activation_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);
// cart
User.hasOne(Cart);
Cart.belongsTo(User);
// role
User.hasOne(Role);
Role.belongsTo(User);
// token
User.hasOne(Token);
Token.belongsTo(User);
