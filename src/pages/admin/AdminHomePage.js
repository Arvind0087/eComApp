import React from "react";
import NavBar from "../../components/navbar/NavBar";
import AdminProductList from "../../components/admin/AdminProductList";
import Footer from "../../components/common/Footer";
function AdminHomePage() {
  return (
    <div>
      <NavBar>
        <AdminProductList />
      </NavBar>
      <Footer />
    </div>
  );
}

export default AdminHomePage;
