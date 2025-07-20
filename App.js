import React from "react";
import ReactDOM from "react-dom/client";

// Header Component Starts

const HeaderCompoent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
        />
        <div className="nav-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Header Component Ends

// Restaurant Card Component Starts

const resObj = {
  type: "restaurant",
  info: {
    id: "1013620",
    name: "Big Bowl",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/cf06adc4-a816-4170-b023-83a41f36db89_1013620.jpg",
    locality: "Koramangala",
    areaName: "80 Feet Road",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Tibetan", "Desserts"],
    avgRating: 4.5,
    parentId: "434792",
    avgRatingString: "4.5",
    totalRatingsString: "253",
    slaString: "20-25 mins",
    promoted: true,
    adTrackingId:
      "cid=31239797~p=0~adgrpid=31239797#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1013620~plpr=COLLECTION~eid=78b2acc8-d5b1-4430-a65f-609894219115~srvts=1753003930567~collid=83639",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-07-20 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textExtendedBadges: {},
        textBased: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
      logoCtx: {
        text: "BENEFITS",
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
      commsStyling: {},
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
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    campaignId: "31239797",
  },
};

const RestroCardComponent = (props) => {
  const { resData } = props;
  return (
    <div className="restro-card">
      <img
        className="restro-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>
        {resData.info.slaString} {resData.info.locality}
      </h4>
    </div>
  );
};
// Restaurant Card Component Ends

// Body Component Starts
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restro-container">
        <RestroCardComponent resData={resObj} />
      </div>
    </div>
  );
};

// Body Component Ends
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderCompoent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
