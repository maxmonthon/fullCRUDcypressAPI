//app.js
// ติดตั้ง express ครอบ backned เราเพื่อจัดการ routing ที่เราสร้าง api 
import express from "express";
import supplierRoute from "./routers/supplierRoute.js";
import productRoute from "./routers/productRoute.js";
import preorderRoute from "./routers/preorderRoute.js";
import preorderdetailRoute from "./routers/preorderdetailRoute.js";
import memberRoute from "./routers/memberRoute.js";
import cors from 'cors'
//1
const app = express();
const PORT = 5000;

//2
app.use(cors());
app.use(express.json());
app.use("/suppliers", supplierRoute);
app.use("/products", productRoute);
app.use("/preorders", preorderRoute);
app.use("/preorderdetails", preorderdetailRoute);
app.use("/members", memberRoute);
//3
app.listen(PORT, () => {
  console.log(`Sever running on port : ` + PORT);
});
