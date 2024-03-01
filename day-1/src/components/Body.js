import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

// Body component
const Body = () => {
  // useState variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  // making a copy of listOfRestaurants for search functionality
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);

  const [searchText, setsearchText] = useState("");

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
    setfilterRestaurantList(parsedDataList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            // we need to provide the onChange handler
            // this will update the searchText state variable
            // so, whenever the searchText is getting on every key press then whole body component is getting re-rendered.
            onChange={(e) => {
              // this onChange method is updating the searchText
              // therefore react is triggering the reconcilation cycle
              // whole body component is getting re-rendered but only updating the input text box due to diff algorithm. React is very efficient in checking the difference.
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurants card and update the UI
              // search Text
              console.log(searchText);
              // now we can update the listOfRestaurants
              const filterRestaurantBySearch = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilterRestaurantList(filterRestaurantBySearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filterTopRatedRestaurantList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilterRestaurantList(filterTopRatedRestaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
