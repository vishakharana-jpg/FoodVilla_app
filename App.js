import { CartProvider } from "./utils/CartContext";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Cart from "./components/Cart";
import Login from "./components/Login";


// Layout Component
const AppLayout = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <Header />
      <Outlet />
      {location.pathname === "/" && <Footer />}
    </CartProvider>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

// ✅ Wrap RouterProvider inside CartProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
);
