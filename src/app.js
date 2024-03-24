import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>Home</li>
          <li>Abour </li>
          <li>Center</li>
          <li>Read More</li>
        </ul>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // Define the route for restaurant details
        element: <RestaurantMenu />, // Specify the component to render
      }
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
