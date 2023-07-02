import express from "express";
//1 qurey ข้อมูลที่เราสร้างจาก ไฟล์ controller มาสร้าง router ใช้ express ครอบ เพื่อแสดง api หลายๆตัว
import {
  getAllSupplier,
  getAllSupplierBySupplierId,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "./../controllers/supplierController.js";

const router = express.Router();

router.get("/", getAllSupplier);
router.get("/:id", getAllSupplierBySupplierId);
router.post("/", createSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;
