//suppiler model.js
import { Sequelize } from "sequelize";
//1
import dbconnect from "../config/dbconnect.js";

const { DataTypes } = Sequelize;
//2 สร้าง data ที่เก็บใน database
const Supplier = dbconnect.define("supplier_tb", {
  supplierName: {
    type: DataTypes.STRING,
  },
  supplierContact: {
    type: DataTypes.STRING,
  },
  supplierAddress: {
    type: DataTypes.STRING,
  },
  supplierPhone: {
    type: DataTypes.STRING,
  },
},{
  freezeTableName:true
});

export default Supplier;

(async () => {
  await dbconnect.sync();
})();
