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
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">
            Dou you want to logout
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => logoutHandler("yes")}>Yes</button>
            <button onClick={() => logoutHandler("no")}>No</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default LogoutPage;
