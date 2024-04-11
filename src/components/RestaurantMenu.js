import  { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

// Now the main job RestaurantMenu is to just display the data
const RestaurantMenu = () => {
  // State to store restaurant information
  // const [resInfo, setResInfo] = useState(null);

  // Extracting restaurant ID from URL params
  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(0)

  const resInfo = useRestaurantMenu(resId); // resId is restaurants Id

  // If restaurant data is still loading, display shimmer effect
  if (!resInfo) {
    return <Shimmer />;
  }
  // Destructuring restaurant information
  const { name, totalRatingsString, locality, cuisines, costForTwoMessage } =
    resInfo.cards[2].card.card.info;

  // Extracting item cards and more item cards

  const catogries =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Extracting title of the additional items section

  /*
  const title1 =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.title;
  const { title } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  const title2 =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.title;
*/
  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <p className="font-bold">
        <h4 className="m-5">{locality}, Agra</h4>
        <h3>{totalRatingsString}</h3>
        {/* <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3> */}
      </p>
      {/* Catogries Accordions */}
      {catogries.map((category, index) => {
        return (
          <RestaurantCategory
          //this is a control component.
            key={category?.card?.card.title}
            data={category?.card?.card}
            showIteam={index === setShowIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ); // if index is 1 make it true else false.

        // now we are making restaurantMenu to control all of this resraurant to all the restauirantCategory Iteam
      })}
    </div>
  );
};

export default RestaurantMenu;
