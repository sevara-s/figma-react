// App.jsx
import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Garden from "./components/Garden";
import Products from "./components/Products";
import "./App.css"; // Import styles specific to this component

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Garden />
      <Products />
    </>
  );
}

export default App;
