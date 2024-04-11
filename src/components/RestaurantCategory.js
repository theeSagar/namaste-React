import { useState } from "react";
import ResCategoryIteamList from "./ResCategoryIteamList";

const RestaurantCategory = ({ data, showIteam, setShowIndex }) => {
  // // console.log(data.title);

  function handelclick() {
    //   setshowIteam(!showIteam); // this was controling individual restaurany list iteams.It was having its own state (UNcontroled component)
    setShowIndex();
  }
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-3 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handelclick()}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <button>
            <span className="hover:bg-blue-200">🔽</span>
          </button>
        </div>
        {showIteam && <ResCategoryIteamList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
