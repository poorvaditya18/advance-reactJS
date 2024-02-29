import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import resList from "../utils/mockData.js";

// Body component
const Body = () => {
  // useState variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

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
