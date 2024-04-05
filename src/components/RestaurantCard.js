import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const imageUrl = CDN_URL + resData.info.cloudinaryImageId;

  return (
    <div className="m-4 p-4 w-[250px]  bg-gray-100 rounded-lg hover:bg-gray-300 ">
      {/* if we have to specify any width that is not their we do like w-[200px] DYNAMIC classes*/}
      <Link
        to={{
          pathname: `/restaurants/${resData.info.id}`,
          state: { imageUrl },
        }}
      >
        <img className="rounded-lg" alt="Restaurant Logo" src={imageUrl} />
      </Link>
      <h3 className="font-bold text-lg py-5">{resData.info.name}</h3>
      {/* <h3>Id: {resData.info.id}</h3> */}
      <h3> <b>Cuisines : </b>{resData.info.cuisines.join(", ")}</h3>
      <h4><b>Rating : </b>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>
        <b>Location: </b>
        {resData.info?.locality}
      </h4>
      <h4> <b>Delivery Time:</b> {resData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
