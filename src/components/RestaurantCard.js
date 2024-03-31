import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const imageUrl = CDN_URL + resData.info.cloudinaryImageId;

  return (
    <div className="res-card">
      <Link to={{ pathname: `/restaurants/${resData.info.id}`, state: { imageUrl } }}>
        <img className="res-logo" alt="Restaurant Logo" src={imageUrl} />
      </Link>
      <h3>{resData.info.name}</h3>
      <h3>Id: {resData.info.id}</h3>
      <h3>{resData.info.cuisines.join(", ")}</h3>
      <h4>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>
        <b>Location: </b>
        {resData.info?.locality}
      </h4>
      <h4>Delivery Time: {resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
