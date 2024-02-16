import { Loader } from "../components/Loader";
import { lazy } from "react";

// Dashboard
export const Dashboard = Loader(
  lazy(() => import("../pages/dashboard/Dashboard"))
);

// Login
export const Login = Loader(lazy(() => import("../pages/auth/LoginPage")));

// Signup
export const Signup = Loader(lazy(() => import("../pages/auth/SignupPage")));

//Cart
export const Cart = Loader(lazy(() => import("../pages/cart/Cart")));

//Cart
export const Checkout = Loader(lazy(() => import("../pages/checkout/checkoutPage")));

//Product Details
export const ProductDetail = Loader(lazy(() => import("../pages/product/ProductDetailsPage")));

//Page Not found
export const PageNotFound = Loader(lazy(() => import("../pages/404")));
