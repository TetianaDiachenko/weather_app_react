// import React from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  { path: "/", 
    element: <Layout />, 
    // errorElement: < NotFound />, // add
    children: [
      // { path: "main", element: <Main />} // add

    ] },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};


export default App;
