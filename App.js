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
import Login from "./components/Login";
import Cards from "./components/Cards";

// Layout Component
const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === "/" && <Footer />}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,        // ✅ FIX 1 (instead of path: "/")
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
        path: "cards",      // ✅ FIX 2 (Cards route added)
        element: <Cards />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
