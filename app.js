import React from "react"; // this "react" is coming from node modules
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.querySelector("#root"));

const RestaurantArr = [
  {
    id: "254105",
    name: "McDonald's",
    cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
    locality: "Civil Lines",
    areaName: "Civil Lines",
    costForTwo: "₹400 for two",
    cuisines: ["American", "Indian", "Thai", "Chinies"],
    avgRating: 4.3,
    parentId: "630",
    avgRatingString: "4.3",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 3.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 01:15:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "499515",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "sclhgvqa6tutskodwusf",
    locality: "Shopping Arcade",
    areaName: "Sadar Bazar",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.1,
    parentId: "4961",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 2.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "570253",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Jawaharnagar Colony",
    areaName: "Jawaharnagar Colony",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.3,
    parentId: "166",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 49,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 03:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "439068",
    name: "Baskin Robbins - Ice Cream Desserts",
    cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
    locality: "Nehru Nagar",
    areaName: "Civil Lines",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: 4.2,
    veg: true,
    parentId: "5588",
    avgRatingString: "4.2",
    totalRatingsString: "50+",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "4.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹90",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "280486",
    name: "Cakewala",
    cloudinaryImageId: "1ba860ebe70c0e584173221a9f649a40",
    locality: "Agra Cantt",
    areaName: "Agra Cantt",
    costForTwo: "₹350 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.2,
    parentId: "3492",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 3.6,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 06:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "407809",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Idgah Colony",
    areaName: "Agra Cantt",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    parentId: "721",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹179",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "74826",
    name: "Subway",
    cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
    locality: "Khandari",
    areaName: "Church Road",
    costForTwo: "₹350 for two",
    cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.2,
    parentId: "2",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 11:55:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "603476",
    name: "Laziz Pizza",
    cloudinaryImageId: "092897f126ab27672a41b4e536b60fe9",
    locality: "Nehru Nagar",
    areaName: "Civil Lines",
    costForTwo: "₹270 for two",
    cuisines: ["Pizzas", "Burgers", "Pastas"],
    avgRating: 4.1,
    parentId: "2299",
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 47,
      lastMileTravel: 3.7,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "3.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },{
    "id": "361092",
                      "name": "Oven Story Pizza - Standout Toppings",
                      "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
                      "locality": "Nehru Nagar",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "3534",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22-32 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-09 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
  },{
    "id": "566482",
                      "name": "Faasos Signature Wraps & Rolls",
                      "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                      "locality": "Nehru Nagar",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "340366",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 52,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-09 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
  },{
    "id": "171108",
                      "name": "Burger 27",
                      "cloudinaryImageId": "96b9ee79cf7475efd3d7485e54fcbd60",
                      "locality": "Tajganj",
                      "areaName": "Tajganj",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Burgers",
                        "Chinese",
                        "Italian",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "13432",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-09 03:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
  }
];

const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="logo-container">
        <img
          className="logo"
          src={require("./logo.png")} // Using require syntax
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  // const  {resName,cuisine}=props this is same as above (destructuring)-> props.resName, props.cuisine
  const { resData} = props;
  // console.log(props.resData?.info?.sla?.deliveryTime); // Using optional chaining
  // console.log(resData.sla.deliveryTime);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res=logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
        // string concatinating above
      />
      <h3>{resData.name}</h3>
      <h3>{resData.cuisines.join(", ")}</h3>
      <h4>{resData.avgRating} Stars</h4>
      <h4>{resData.sla.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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
        {
  RestaurantArr.map((restaurant) => (
    <RestaurantCard key={restaurant.id} resData={restaurant} />
    //Never to use index for key ALWAYS use unique key
    
    // not using key(not acceptable) <<<< index as a key <<<<<<<<<<<<< unique id(best practice).
  ))
}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>Home</li>
          <li>Abour </li>
          <li>Center</li>
          <li>Read More</li>
        </ul>
      </div>
    </footer>
  );
};

// All app components rendered below-

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
