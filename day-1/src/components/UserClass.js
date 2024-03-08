// class based component
import React from "react";

class UserClass extends React.Component {
  // for accessing props
  constructor(props) {
    super(props);
    console.log(props);

    // creating state variables inside class based component
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  //you need to provide render method which return some piece of jsx
  render() {
    // destructuring
    const { name, location } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pb.wtf18</h4>
      </div>
    );
  }
}

export default UserClass;
