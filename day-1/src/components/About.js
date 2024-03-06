import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Food App</h2>
      <User />
      <UserClass name={"Poorvaditya Class"} location={"Pune"} />
    </div>
  );
};

export default About;
