import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(null); 
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg my-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        // Restuarant Menu is a controlled component.
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          // if we change showIndex then it will automatically update it.
          // So we need to modify state variable from parent -> not possible directly but indireclty we can do.
          // on lhs setShowIndex it the function we are passing to the RestaurantCategory.
          // on rhs setShowIndex it state variable function .
          setShowIndex={() => {
            index !== showIndex ? setShowIndex(index) : setShowIndex(null);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
