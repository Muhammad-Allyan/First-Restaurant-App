import React from "./node_modules/react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/Components/HeaderComponent";
import BodyComponent from "./src/Components/BodyComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
