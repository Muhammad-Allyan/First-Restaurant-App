import RestroCardComponent from "./RestroCardComponent";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

// Heading Compo inside Body Compo starts
const HeadingRestoMain = () => (
  <h1 className="main-resto-heading">Top restaurant chains</h1>
);
//   Heading Compo inside Body Compo ends

// Body Component Starts
const BodyComponent = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    // console.log(`useEffect() called!`);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards?.[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  };

  console.log("Body Rendered!");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Filter
        </button>
      </div>
      <HeadingRestoMain />
      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestroCardComponent key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestroCardComponent resData={resList[0]} />
        <RestroCardComponent resData={resList[1]} />
        <RestroCardComponent resData={resList[2]} />
        <RestroCardComponent resData={resList[3]} />
        <RestroCardComponent resData={resList[4]} />
        <RestroCardComponent resData={resList[5]} />
        <RestroCardComponent resData={resList[6]} />
        <RestroCardComponent resData={resList[7]} /> */}
      </div>
    </div>
  );
};

export default BodyComponent;
// Body Component Ends
