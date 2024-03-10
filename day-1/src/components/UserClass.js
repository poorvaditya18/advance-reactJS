// class based component
import React from "react";

class UserClass extends React.Component {
  // for accessing props
  constructor(props) {
    super(props);
    // creating state variables inside class based component
    this.state = {
      count: 0,
    };

    console.log(this.props.name, "child constructor");
  }

  componentDidMount() {
    //constructor is called -> then render() -> then after component is mounted -> then componentDidMount will be called.
    // so it is best suited for API Calls
    console.log(this.props.name, "Child component did mount.");
  }

  //you need to provide render method which return some piece of jsx
  render() {
    console.log(this.props.name, "child render");
    // destructuring
    const { name, location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // Never update component directy -> this.state.count = this.state.count + 1
            // update state variable
            // react will re-render the component and update the component
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pb.wtf18</h4>
      </div>
    );
  }
}

export default UserClass;
