import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./component/HomeLayout/HomeLayout";

import Home from "./component/Home/Home";
import AboutUs from "./component/Home/About";
import ContactUs from "./component/Home/Contact";
import Test from "./component/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
  {
    path: "/test",
    element: <Test />
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
