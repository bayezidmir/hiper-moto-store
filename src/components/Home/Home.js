import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Navbar from "./Navbar";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
