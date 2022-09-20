import { Sequelize } from "sequelize";

const sequelize = new Sequelize("api", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

// models

// /models
const start = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
await start();

export default sequelize;
