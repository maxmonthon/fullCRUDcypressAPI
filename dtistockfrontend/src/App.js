
//app.js หน้า Frontend
import "./App.css";

//1 ติดตั้ง react-router-dom ตัวเปลื่ยน page router 
import { Routes, Route, BrowserRouter } from "react-router-dom";
//2 ดึงไฟล์ supplier show create update
import ShowAllSupplierUI from "./screens/ShowAllSupplierUI";
import CreateSupplierUI from "./screens/CreateSupplierUI";
import UpdateSupplierUI from "./screens/UpdateSupplierUI";
import ShowAllProductUI from "./screens/ShowAllProductUI";
import CreateProductUI from "./screens/CreateProductUI";
import UpdateProductUI from "./screens/UpdateProductUI";
import ShowAllMemberUI from "./screens/ShowAllMemberUI";
import CreateMemberUI from "./screens/CreateMemberUI";
import UpdateMemberUI from "./screens/UpdateMemberUI";

function App() {
  return (
//3 browserrouter ครอบ Routes ครอบ Route path เปลื่ยน page ui
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAllSupplierUI />} />
        <Route path="/suppliercreate" element={<CreateSupplierUI />} />
        <Route path="/supplierupdate" element={<UpdateSupplierUI />} />
        <Route path="/products" element={<ShowAllProductUI />} />
        <Route path="/productcreate" element={<CreateProductUI />} />
        <Route path="/productupdate" element={<UpdateProductUI />} />
        <Route path="/members" element={<ShowAllMemberUI />} />
        <Route path="/membercreate" element={<CreateMemberUI/>} />
        <Route path="/memberupdate" element={<UpdateMemberUI/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
