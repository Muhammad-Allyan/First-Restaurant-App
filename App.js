import React from "react";
import ReactDOM from "react-dom/client";

const HeaderCompoent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
        />
        <div className="nav-items">
            <ul>
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

const AppLayout = () => {
  return <div className="app">
    <HeaderCompoent />
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);