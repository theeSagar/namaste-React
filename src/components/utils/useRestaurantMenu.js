import { useEffect, useState } from "react";

// ------    Function to fetch restaurant menu data ------

// All the logic of getting the data from API taken out from main component

const useRestaurantMenu = (resId) => { //resId is restaurants Id
  // fetch data

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const jsonData = await response.json();
      setResInfo(jsonData.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
