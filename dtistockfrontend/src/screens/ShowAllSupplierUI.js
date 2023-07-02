import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'
// http://localhost:3000/ หน้าแรก

//1 สร้าง usestate เกบ suppliers 
const ShowAllSupplierUI = () => {
  const [suppliers, setSuppliers] = useState([]);

// useeffect rander ทุกครั้งที่เปลื่ยน page 
  useEffect(() => {
    getSupplier();
  }, []);

//2 สร้างFuc getSupplier ใช้ axios ดึง get data มาแสดง
  const getSupplier = async () => {
    const response = await axios.get("http://localhost:5000/suppliers");
    setSuppliers(response.data);
  };

//3  สร้างFuc deleteSupplier ใช้ axios ดึง delete data ออกจาก row
  const deleteSupplier = async (id) => {
    await axios.delete(`http://localhost:5000/suppliers/${id}`);
    getSupplier();
  };


  return (
    
    <div className="column mt-5 is-centered">
      <div className="column">
        <Link to="/" >
          <h1 className="title" style={{textAlign:"center"}}>Supplier</h1>
        </Link>

        <Link to="/suppliercreate">
          <button className="button is-success is-small">Create Supplier</button>
        </Link>
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <th>Supplier ID</th>
            <th>Supplier Name</th>
            <th>Supplier Contact</th>
            <th>Supplier Address</th>
            <th>Supplier Phone</th>
            <th>Do Something else</th>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.supplierName}</td>
                <td>{supplier.supplierContact}</td>
                <td>{supplier.supplierAddress}</td>
                <td>{supplier.supplierPhone}</td>
                <td>
                  <button className="button is-warning is-small">
                    <Link to="/supplierupdate">edit</Link>
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button className="button is-danger is-small" onClick={() => deleteSupplier(supplier.id)}>delete</button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllSupplierUI;
