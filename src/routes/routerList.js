import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  PageNotFound,
  Cart,
  Checkout,
  ProductDetail,
  Profile,
  Orders,
  Logout,
  OrderSuccess,
  StripeCheckout,
  OrderHistory,
  ForgotPassword,
  AdminHome,
  AdminProductDetailsPage,
  AdminProductForm,
  AdminOrder,
} from "./elements";
import Protected from "../components/auth/Protected";
import ProtectedAdmin from "../components/auth/ProtectedAdmin";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <Cart></Cart>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetail></ProductDetail>
      </Protected>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailsPage></AdminProductDetailsPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductForm></AdminProductForm>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrder></AdminOrder>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductForm></AdminProductForm>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile></Profile>
      </Protected>
    ),
  },
  {
    path: "/my-orders",
    element: (
      <Protected>
        <OrderHistory></OrderHistory>
      </Protected>
    ),
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <Orders></Orders>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccess></OrderSuccess>
      </Protected>
    ),
  },
  {
    path: "/stripe-checkout",
    element: (
      <Protected>
        <StripeCheckout></StripeCheckout>
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: (
      <Protected>
        <Logout></Logout>
      </Protected>
    ),
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
