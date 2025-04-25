import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import OfferSec from "./components/OfferSec";

const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-20 bg-[#F1F5F9]">
        <Hero />
        <Products />
        <OfferSec/>
      </div>
    </>
  );
};

export default Home;
