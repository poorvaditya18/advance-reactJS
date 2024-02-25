const heading1 = React.createElement(
  "h1",
  // providing attributes
  { id: "heading1", className: "heading" },
  "Heading 1!"
);
const heading2 = React.createElement(
  "h1",
  // providing attributes
  { id: "heading2", className: "heading" },
  "Heading 2!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  // putting multiple childrens inside div in the form of array
  [heading1, heading2]
);

// we need to tell react what is the root element inside our app
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside the root
root.render(container);
