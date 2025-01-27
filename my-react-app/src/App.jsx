// App.jsx
import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Garden from "./components/Garden";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import "./App.css"; // Import styles specific to this component

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Garden />
      <Products />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
