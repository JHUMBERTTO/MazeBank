import { Sequelize } from "sequelize";
import pg from 'pg';


export const    sequelize = new Sequelize(
  "mazebank", // DB NAME
  "postgres", // USER NAME
  "admin", // PASSWORD
  {
    host:"localhost", // SERVER
    port:"5432", // PORT
    dialect: "postgres", // DIALECT
    dialectModule: pg
  }
);  