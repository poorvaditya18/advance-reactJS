const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6 flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
