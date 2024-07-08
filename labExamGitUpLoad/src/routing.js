import  React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Read from "./components/Read";
import Create from "./components/Create";


const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/read",
        element: <Read />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      
    ],
  },
]);

export default customRouter;
