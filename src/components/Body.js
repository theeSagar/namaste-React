import RestaurantCard from "./RestaurantCard";
import { RestaurantArr } from "./utils/constants";

import { useState } from "react";

const Body = () => {
  // Local State Variable- Super Pawerful Variable using Hooks

  const [RestaurantArrCons, setRestaurantArr] = useState(RestaurantArr);// as soon as i call setRestaurantArr React will find the difference and update the UI

/* ------------------ const [RestaurantArrCons, setRestaurantArr] = useState(RestaurantArr) ----  is same as below-
  const arr=useState(RestaurantArr);
  const RestaurantArrCons=arr[0];
  const setRestaurantArr=arr[1];*/


  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const newRestaurantArr = RestaurantArrCons.filter((restaurant) => {
            return restaurant.avgRating > 4.1; // Return the condition for filtering
          });
          setRestaurantArr(newRestaurantArr);
        }}
      >
        Top Restaurant
      </button>
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
        {RestaurantArrCons.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
          //Never to use index for key ALWAYS use unique key

          // not using key(not acceptable) <<<< index as a key <<<<<<<<<<<<< unique id(best practice).
        ))}
      </div>
    </div>
  );
};
export default Body;
