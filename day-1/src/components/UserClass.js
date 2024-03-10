// class based component
import React from "react";

class UserClass extends React.Component {
  // for accessing props
  constructor(props) {
    super(props);
    // state variable with dummy values
    this.state = {
      // user info is a state variable
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "image",
      },
    };
  }

  async componentDidMount() {
    //constructor is called -> then render() -> then after component is mounted -> then componentDidMount will be called.
    // so it is best suited for API Calls
    const data = await fetch("https://api.github.com/users/poorvaditya18");
    const json = await data.json();
    console.log(json);
    // updating state variable
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pb.wtf18</h4>
      </div>
    );
  }
}

export default UserClass;
