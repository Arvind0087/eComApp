import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ProductList from "../../components/products/ProductList";
function Dashboard() {
  return (
    <NavBar>
      <ProductList />
    </NavBar>
  );
}

export default Dashboard;
