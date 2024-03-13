import RestaurantCard, { withPromotedLable } from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
// Body component
const Body = () => {
  // useState variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  // making a copy of listOfRestaurants for search functionality
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);

  const [searchText, setsearchText] = useState("");

  console.log("List Of Restaurants", listOfRestaurants);

  // passing RestaurantCard component to Higher order component
  // it return a component. So RestaurantCardPromoted will store a component.
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

  useEffect(() => {
    // callback function will be called after the component is rendered
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>
        Looks Like you'are offline!! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
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
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filterRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
