import React from "react";
import ReactDOM from "react-dom/client";

// react element
const title = (
  <h1 className="Title" tabIndex="5">
    Hey Everyone Title
  </h1>
);

// Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>{console.log(100 + 200)}</h1>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// ReactDOM used for interacting with DOM elements
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component
root.render(<HeadingComponent />);
