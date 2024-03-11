import { CDN_URL } from "./utils/constants";

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
          src={ CDN_URL + resData.cloudinaryImageId
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
  export default RestaurantCard