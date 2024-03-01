import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

// Body component
const Body = () => {
  // useState variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(() => {
    // callback function will be called after the component is rendered
    console.log("making swiggy api call...");
    fetchData();
  }, []);

  const fetchData = async () => {
    // using fetch
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // convert data to json
    const json = await data.json();
    // we can use optional chaining
    const parsedDataList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // now put this new data inside the listOfRestaurant
    setlistOfRestaurants(parsedDataList);
  };

  if (listOfRestaurants.length === 0) {
    // loading or spinner
    // instead of haiving loading and spinner use SHIMMER UI

    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // Now we are updating the listOfRestaurant using state variable (useState())
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* NOTE : instead of for loop to iterate over resList. use map(), filter(), reduce() */}
        {listOfRestaurants.map((restaurant) => (
          // <RestaurantCard/> is just a function and it is returing some jsx code. Pretty Simple and understandable.
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
