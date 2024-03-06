// class based component
import React from "react";

class UserClass extends React.Component {
  // for accessing props
  constructor(props) {
    super(props);
    console.log(props);
  }

  //you need to provide render method which return some piece of jsx
  render() {
    // destructuring
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pb.wtf18</h4>
      </div>
    );
  }
}

export default UserClass;
