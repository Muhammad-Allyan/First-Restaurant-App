import { LOGO_URL } from "../utils/constants";

// Header Component Starts
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
        <div className="nav-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{}}>Login</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
// Header Component Ends