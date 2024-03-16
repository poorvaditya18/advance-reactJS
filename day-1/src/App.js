import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantCard from "./components/RestaurantCard.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";

// Lazy loading - we will lazy load Grocery
const Grocery = lazy(() => import("./components/Grocery.js"));

// App Layout
const AppLayout = () => {
  // this userInfo we need to pass to the context
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Assume: api call for authentication
    const data = {
      name: "Poorvaditya",
    };
    setUserName(data.name);
  }, []);

  return (
    // so we are wrapping it . So everywhere it will new use. Basically overriding the value.
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
