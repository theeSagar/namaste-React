import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

import { useEffect, useState } from "react";

const Body = () => {
  //console.log("in body"); // this will be printed minimum 2 times as our body is reRendered again after fetching the data and setting the new value of searchText.
  // Local State Variable- Super Pawerful Variable using Hooks
  const onlineStatus = useOnlineStatus();

  const [RestaurantArrCons, setRestaurantArr] = useState([]); // as soon as i call setRestaurantArr React will find the difference and update the UI

  /* ------------------ const [RestaurantArrCons, setRestaurantArr] = useState(RestaurantArr) ----  is same as below-
  const arr=useState(RestaurantArr);
  const RestaurantArrCons=arr[0];
  const setRestaurantArr=arr[1];*/
  const [searchText, setsearchText] = useState(""); // Initially the input value is null so ""
  const [filteredRestaurants, setfilteredRestaurants] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData)
    // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setRestaurantArr(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // Conditional Rendering -
  if (RestaurantArrCons.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline ❌. Check your internet connection.</h1>
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search_box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          {/* to track the value of this input box we have to bind the value with the local state value.  */}
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI.

              //Get the search text .

              // console.log([searchText][0])
              const filterRes = RestaurantArrCons.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filterRes);
            }}
            className="search_btn"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const newRestaurantArr = RestaurantArrCons.filter((restaurant) => {
              return restaurant.info.avgRating > 4.3; // Return the condition for filtering
            });
            setfilteredRestaurants(newRestaurantArr);
            // console.log(newRestaurantArr);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard component will be rendered here -- */}
        {/* <RestaurantCard resData={RestaurantArr[0]} />
          <RestaurantCard resData={RestaurantArr[1]} />
          <RestaurantCard resData={RestaurantArr[3]} />
          <RestaurantCard resData={RestaurantArr[4]} />
          <RestaurantCard resData={RestaurantArr[5]} />
          <RestaurantCard resData={RestaurantArr[6]} />
          <RestaurantCard resData={RestaurantArr[7]} />
          <RestaurantCard resData={RestaurantArr[8]} />
          <RestaurantCard resData={RestaurantArr[9]} />
          <RestaurantCard resData={RestaurantArr[10]} /> */}
        {/* resData is a prop */}
        {/*I have passed MsDonaldObj(Object) which is like passing argmnts in fns and later we will use this as props in our component*/}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
          //Never to use index for key ALWAYS use unique key

          // not using key(not acceptable) <<<< index as a key <<<<<<<<<<<<< unique id(best practice).
        ))}
      </div>
    </div>
  );
};
export default Body;