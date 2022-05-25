import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
