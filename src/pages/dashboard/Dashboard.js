import React from "react";
import NavBar from "../../components/navbar/NavBar";
import ProductList from "../../components/products/ProductList";
import Footer from "../../components/common/Footer";
function Dashboard() {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
      <Footer />
    </div>
  );
}

export default Dashboard;
