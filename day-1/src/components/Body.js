import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";

// Body component
const Body = () => {
  return (
    <div className="body">
      <div className="search-container"> Search</div>
      <div className="restaurant-container">
        {/* they will contain a lot of restaurant card. We will be reusing the restaurantCard component. This increases our code reusability.*/}

        {/* NOTE : Not good practise */}
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} /> */}

        {/* NOTE : instead of for loop to iterate over resList. use map(), filter(), reduce() */}
        {resList.map((restaurant) => (
          // <RestaurantCard/> is just a function and it is returing some jsx code. Pretty Simple and understandable.
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
