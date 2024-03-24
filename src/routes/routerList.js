import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
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
} from "./elements";
import Protected from "../components/Protected";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Dashboard></Dashboard>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "dashboard",
  //   element: <Dashboard />,
  // },
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
    path: "*",
    element: <PageNotFound />,
  },
]);
