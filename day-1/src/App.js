import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantCard from "./components/RestaurantCard.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// Lazy loading - we will lazy load Grocery
const Grocery = lazy(() => import("./components/Grocery.js"));

// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      {/* header will be intact. */}
      <Header />
      {/* here , outlet will render the childrens that will be passed to the parent. 
        This Outlet will be replaced by the component according to the path. Hence it wont be visible inside html we you see developers console.*/}
      <Outlet />
    </div>
  );
};

// creating routing configuration
// means if path "/" then load AppLayout component
// Now we need to provide this to render it . For this
const appRouter = createBrowserRouter([
  {
    // parent route or root route
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        // this should be dynamic path  -> :restaurantId this path is dynamic.
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
