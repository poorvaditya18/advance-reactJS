import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    //constructor is called -> then render() -> then after component is mounted -> then componentDidMount will be called.
    // so it is best suited for API Calls
    console.log("Parent component did mount.");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food App</h2>
        {/* class based component  */}
        <UserClass name={"Poorvaditya Class"} location={"Pune"} />
        <UserClass name={"Aniket Class"} location={"Kharagpur"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Food App</h2>
//       {/* <User /> */}
//       {/* class based component  */}
//       <UserClass name={"Poorvaditya Class"} location={"Pune"} />
//     </div>
//   );
// };

export default About;
