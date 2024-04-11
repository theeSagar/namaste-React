import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grosery from "./components/Grocery"; /we are not going to import our Grosery like this

// Chucking
//Lazy Loading -> We will noty load this , only will be loaded when required.
// On Demand Loading
//Dynamic Bunddling
//Code Splitting
//we have broken down our code into small chunks
const Grosery = lazy(() => import("./components/Grocery")); // when i go to grosery then only it will load.
const About = lazy(() => import("./components/About")); 

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* <ul>
          <li>Home</li>
          <li>Abour </li>
          <li>Center</li>
          <li>Read More</li>
        </ul> */}
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
        element: (
          <Suspense fallback={<h1>About Is loading...........</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1>This is FallBack. Loading Your screen.......</h1>}
          >
            <Grosery />
          </Suspense>
        ),
        // Suspense is used to show the data meanwhile when react is loading the Grosery. It took some time to load the Grosery so at that middle time react showe error.
      },
      {
        path: "/restaurants/:resId", // Define the route for restaurant details
        element: <RestaurantMenu />, // Specify the component to render
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
