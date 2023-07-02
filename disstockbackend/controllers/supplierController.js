//supplier Controller.js
import Supplier from "../models/supplierModel.js";

import { where } from "sequelize";
//1 query data 
export const getAllSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findAll();
    res.json(supplier);
  } catch (err) {
    res.json({ message: err.message });
  }
};
// รับ Get มาแสดง
export const getAllSupplierBySupplierId = async (req, res) => {
  try {
    const supplier = await Supplier.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(supplier[0]);
  } catch (err) {
    res.json({ message: err.message });
  }
};
//  Post สร้างข้อมูล
export const createSupplier = async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.json({ message: "Supplier created successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
// Put อัพเดททับจากข้อมูลเก่า
export const updateSupplier = async (req, res) => {
  try {
    await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Supplier updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
// Deleted ข้อมูล
export const deleteSupplier = async (req, res) => {
  try {
    await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
