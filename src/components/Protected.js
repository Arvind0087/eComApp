import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { createSignup } = useSelector((state) => state.auth);

  const localUser = JSON.parse(localStorage.getItem("user"));

  if (!localUser) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
