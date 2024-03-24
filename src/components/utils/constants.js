 const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

   const LOGO_URL = require("./logo.png");

//Below is normal javaScript variable and State varible is in body.js--

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
  },
  {
    id: "361092",
    name: "Oven Story Pizza - Standout Toppings",
    cloudinaryImageId: "b39e4312ae2e9f65c3b58faaed83f488",
    locality: "Nehru Nagar",
    areaName: "Civil Lines",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.4,
    parentId: "3534",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "22-32 mins",
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
    id: "566482",
    name: "Faasos Signature Wraps & Rolls",
    cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
    locality: "Nehru Nagar",
    areaName: "Civil Lines",
    costForTwo: "₹350 for two",
    cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts", "Beverages"],
    avgRating: 4.4,
    parentId: "340366",
    avgRatingString: "4.4",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 52,
      lastMileTravel: 4.6,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
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
    id: "171108",
    name: "Burger 27",
    cloudinaryImageId: "96b9ee79cf7475efd3d7485e54fcbd60",
    locality: "Tajganj",
    areaName: "Tajganj",
    costForTwo: "₹250 for two",
    cuisines: ["Burgers", "Chinese", "Italian", "Beverages"],
    avgRating: 4.4,
    parentId: "13432",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-03-09 03:30:00",
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
    
    "id": "361096",
    "name": "The Good Bowl",
    "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
    "locality": "Nehru Nagar",
    "areaName": "Civil Lines",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "North Indian",
      "Pastas",
      "Punjabi",
      "Desserts",
      "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "7918",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-03-11 03:00:00",
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
      "header": "60% OFF",
      "subHeader": "UPTO ₹110"
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
  },
  {
    "id": "432387",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Wazirpura Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-11 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
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
  },
  {
    "id": "361093",
                      "name": "Firangi Bake",
                      "cloudinaryImageId": "qk0qfdxgynkfsmzpwyu5",
                      "locality": "Nehru Nagar",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Mexican",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3952",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-11 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
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
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
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
  },
  {
    "id": "361094",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
                      "locality": "Nehru Nagar",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Snacks",
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "4444",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-03-11 03:00:00",
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
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹110"
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

 export{ RestaurantArr, 
  LOGO_URL, 
  CDN_URL };



// Two types of export nd Import --

/* - named export 

export default <name of the component>
          Import (name of the component) from .path*/

/*  export {multiple, components}
      import {name of component} from path*/
