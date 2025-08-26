import RestroCardComponent from "./RestroCardComponent";
import resList from "../utils/mockData";
// Heading Compo inside Body Compo starts
const HeadingRestoMain = () => (
  <h1 className="main-resto-heading">Top restaurant chains</h1>
);
//   Heading Compo inside Body Compo ends

// Body Component Starts
const BodyComponent = () => { 
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <HeadingRestoMain />
      <div className="restro-container">
        {resList.map((restaurant) => (
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