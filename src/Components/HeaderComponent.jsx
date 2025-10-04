import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// Header Component Starts
const HeaderComponent = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <div className="nav-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
// Header Component Ends
