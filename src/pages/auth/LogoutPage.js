import { useEffect } from "react";
// import { signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LogoutPage() {
  let user = localStorage.removeItem("user");

  const logoutHandler = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    logoutHandler();
  });

  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}

export default LogoutPage;
