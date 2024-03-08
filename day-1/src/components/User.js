import { useState } from "react";
const User = () => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Name: Poorvaditya</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: @pb.wtf18</h4>
    </div>
  );
};

export default User;
