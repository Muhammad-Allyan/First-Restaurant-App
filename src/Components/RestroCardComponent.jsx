import { CDN_URL } from "../utils/constants";

const RestroCardComponent = (props) => {
  // Destructuring on the fly / Object Destructuring
  const {
    resData: {
      info: {
        name,
        avgRating,
        cuisines,
        costForTwo,
        slaString,
        locality,
        cloudinaryImageId,
      },
    },
  } = props;
  // const { name, avgRating, cuisines, costForTwo, slaString, locality } = resData?.info;
  // const { name, avgRating, cuisines, costForTwo, slaString, locality } = props;
  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src={CDN_URL+cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>
        {slaString} {locality}
      </h4>
    </div>
  );
};

export default RestroCardComponent;
// Restaurant Card Component Ends