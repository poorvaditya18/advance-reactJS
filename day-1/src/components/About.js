import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food App</h2>
        {/* class based component  */}
        <UserClass name={"Poorvaditya Class"} location={"Pune"} />
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
