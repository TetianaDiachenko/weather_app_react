import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import Layout from "./components/layout/Layout";
import { createBrowserRouter } from "react-router";
import './App.scss'; 

const router = createBrowserRouter([
  { path: "/", 
    element: <Layout />, 
    // errorElement: < NotFound />, // add
    children: [
      // { path: "main", element: <Main />} // add
    ] },
],
{
  basename: "/weather_app_react/",
}
);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};


export default App;
