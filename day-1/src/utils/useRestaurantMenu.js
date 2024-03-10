import { useEffect, useState } from "react";
import { MENU_URL } from "./constants.js";

// useRestaurantMenu hook -> it's job is to return the restaurant information.
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("Fetching data from custom hooks...");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
