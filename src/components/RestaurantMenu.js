import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

// Now the main job RestaurantMenu is to just display the data
const RestaurantMenu = () => {
  // State to store restaurant information
  // const [resInfo, setResInfo] = useState(null);

  // Extracting restaurant ID from URL params
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); // resId is restaurants Id

  // If restaurant data is still loading, display shimmer effect
  if (!resInfo) {
    return <Shimmer />;
  }
  // Destructuring restaurant information
  const { name, totalRatingsString, locality, cuisines, costForTwoMessage } =
    resInfo.cards[2].card.card.info;

  // Extracting item cards and more item cards

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ?? {};
  const moreItemCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  const moreItemCards2 =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards;

  // Extracting title of the additional items section
  const title1 =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.title;
  const { title } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  const title2 =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.title;
  console.log(title2);

  return (
    <div className="menu1">
      <h1>{name}</h1>
      <h3>{totalRatingsString}</h3>
      <h4>{locality}</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>{title1}</h2>
      <ul>
        {itemCards &&
          itemCards.length > 0 &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice}
            </li>
          ))}
      </ul>
      <h2>{title}</h2>
      <ul>
        {moreItemCards &&
          moreItemCards.length > 0 &&
          moreItemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice}
            </li>
          ))}
      </ul>
      <h2>{title2}</h2>
      <ul>
        {moreItemCards2 &&
          moreItemCards2.length > 0 &&
          moreItemCards2.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
