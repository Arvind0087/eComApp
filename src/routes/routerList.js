import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  Login,
  Signup,
  PageNotFound,
  Cart,
  Checkout,
  ProductDetail,
} from "./elements";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
