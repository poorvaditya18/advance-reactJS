import { CDN_URL } from "../utils/constants";
// Restaurant card component
const RestaurantCard = (props) => {
  // RestaurantCard will have -> img , name of restaurant , star rating , cuisine, delivery time.
  const { resData } = props;

  // good way to always destructure your data
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        // Good practise : image coming from cdn
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
