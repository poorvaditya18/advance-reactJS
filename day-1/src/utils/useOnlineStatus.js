import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check if online
  // we will use -> event listener
  // event listener will keep track of online
  // since we want to use it once , we will use -> useEffect()
  useEffect(() => {
    // this event listener will track
    // if we go offline it will set online status = false
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
