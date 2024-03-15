import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  // All the restaurant categories have their own state.
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("clicked!");
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
