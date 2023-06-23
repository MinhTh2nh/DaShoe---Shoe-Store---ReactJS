import path from "node:path";
import { DataSource } from "typeorm";
import config from "@/config";
import logger from "@/logger";

export const instance = new DataSource({
  type: "mariadb",
  host: config.database.host,
  port: config.database.port,
  database: config.database.database,
  username: config.database.username,
  password: config.database.password,
  synchronize: true,
  logging: false,
  maxQueryExecutionTime: 1000,
  entities: [
    `${path.resolve(__dirname, "../../../", "models")}/**/*.ts`,
    `${path.resolve(__dirname, "../../../", "models")}/**/*.js`,
  ],
  cache: {
    duration: 60000,
  },
});

export const connect = async (): Promise<void> => {
  logger.info("Connecting to the database...");

  try {
    await instance.initialize();
    logger.info("Connected to the database");
  } catch (err) {
    logger.error(err);
  }
};

export default instance;