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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
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