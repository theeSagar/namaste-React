import { CDN_URL } from "./utils/constants";

const ResCategoryIteamList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ul>
        <div>
          {items.map((item) => {
            return (
              <div
                key={item.card.info.id}
                className="p-8 m-2 border-b-4 text-left flex justify-between"
              >
                {/* <img src={CDN_URL+item.card.info.imageId} className="w-14"/> */}

                <div>
  <div className="px-1">
    <span className="font-bold">{item.card.info.name}</span> <br />
    <span>
      {" "}
      ₹{" "}
      {item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100}
    </span>
  </div>
  {(item.card.info &&
    item.card.info.ratings &&
    item.card.info.ratings.aggregatedRating &&
    Object.keys(item.card.info.ratings.aggregatedRating).length !== 0) && (
    <div>
      <p>
        ⭐{item.card.info.ratings.aggregatedRating.rating}(
        {item.card.info.ratings.aggregatedRating.ratingCountV2})
      </p>
    </div>
  )}
  {(item.card.info && item.card.info.description) && (
    <p>{item.card.info.description}</p>
  )}
</div>

                <div style={{ position: "relative" }}>
                  {item.card.info.imageId && (
                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="w-36 rounded-md"
                    />
                  )}
                  <button
                    className="p-3 mx-10  bg-black text-white shadow-lg absolute top-0 start-0 translate-middle rounded-md hover:bg-gray-500"
                    style={{ zIndex: 1 }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
export default ResCategoryIteamList;
