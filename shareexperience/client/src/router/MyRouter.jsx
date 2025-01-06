import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Bodypage } from "../pages/Bodypage.jsx";
import { Read } from "../pages/Read.jsx";
import { Add } from "../pages/Add.jsx";
import App from "../App.jsx";
import { BlogDetails } from "../pages/BlogDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Bodypage />,
      },
      {
        path: "/bodypage",
        element: <Bodypage />,
      },
      {
        path: "/read",
        element: <Read />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/blogdetails",
        element: <BlogDetails />,
      },
      {
        path:"/add",
        element:<Add/>
      }
    ],
  },
]);
export default routes;
