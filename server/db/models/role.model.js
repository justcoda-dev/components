import db from "../dataBase.js"
import {DataTypes} from "sequelize"

const Role = db.define('role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {})