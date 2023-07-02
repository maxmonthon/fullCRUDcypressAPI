//config.js
// ใช้ sequrelize query ข้อมูล database ที่เราทำ
import { Sequelize } from "sequelize";

const dbconnect = new Sequelize("dti_stock_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default dbconnect;
