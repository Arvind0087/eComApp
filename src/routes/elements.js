import { Loader } from "../components/Loader";
import { lazy } from "react";

// Dashboard
export const Home = Loader(lazy(() => import("../pages/dashboard/Dashboard")));

// Admin Home
export const AdminHome = Loader(
  lazy(() => import("../pages/admin/AdminHomePage"))
);

// Login
export const Login = Loader(lazy(() => import("../pages/auth/LoginPage")));

// Signup
export const Signup = Loader(lazy(() => import("../pages/auth/SignupPage")));

//Cart
export const Cart = Loader(lazy(() => import("../pages/cart/Cart")));

//Cart
export const Checkout = Loader(
  lazy(() => import("../pages/checkout/checkoutPage"))
);

//Product Details
export const ProductDetail = Loader(
  lazy(() => import("../pages/product/ProductDetailsPage"))
);

//Admin Product Details
export const AdminProductDetailsPage = Loader(
  lazy(() => import("../pages/admin/AdminProductDetailsPage"))
);

//Admin Product Form
export const AdminProductForm = Loader(
  lazy(() => import("../pages/admin/AdminProductForm.js"))
);

//Admin Order
export const AdminOrder = Loader(
  lazy(() => import("../pages/admin/AdminOrderPage.js"))
);

//Profile
export const Profile = Loader(
  lazy(() => import("../pages/user/profile/ProfilePage"))
);

//Orders
export const Orders = Loader(lazy(() => import("../pages/orders/Orders")));

//Logout
export const Logout = Loader(lazy(() => import("../pages/auth/LogoutPage")));

//Logout
export const ForgotPassword = Loader(
  lazy(() => import("../pages/auth/ForgotPasswordPage"))
);

//order Page
export const OrderHistory = Loader(
  lazy(() => import("../pages/orders/OrdersPage"))
);

//order success
export const OrderSuccess = Loader(
  lazy(() => import("../pages/orders/OrderSuccess"))
);

//stripe checkout
export const StripeCheckout = Loader(
  lazy(() => import("../pages/orders/StripeCheckout"))
);

//Page Not found
export const PageNotFound = Loader(lazy(() => import("../pages/404")));
