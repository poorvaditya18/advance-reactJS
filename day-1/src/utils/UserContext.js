import { createContext } from "react";

// We can access this context from anywhere in the app
// we will give creteContext some information to initialise
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
