import React from "react";
import { useNavigate } from "react-router";

function LogoutPage() {
  const navigate = useNavigate();

  const logoutHandler = (val) => {
    if (val == "yes") {
      localStorage.removeItem("user");
      //   localStorage.clear();
      navigate("/login");
    } else {
      navigate(-1);
    }
  };
  return (
    <div>
      <p>Dou you want to logout</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => logoutHandler("yes")}>Yes</button>
        <button onClick={() => logoutHandler("no")}>No</button>
      </div>
    </div>
  );
}

export default LogoutPage;
