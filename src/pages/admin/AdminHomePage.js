import React from "react";
import NavBar from "../../components/navbar/NavBar";
import AdminProductList from "../../components/admin/AdminProductList";
function AdminHomePage() {
  return (
    <NavBar>
      <AdminProductList />
    </NavBar>
  );
}

export default AdminHomePage;
