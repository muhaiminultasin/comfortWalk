import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import OfferSec from "./components/OfferSec";
import HotDeal from "./components/HotDeal";
import DeliverySec from "./components/DeliverySec";
import About from "./components/About";
import MissionVission from "./components/MissionVission";
import Review from "./components/Review";
import FrequentlyAsked from "./components/FrequentlyAsked";
import Connect from "./components/Connect";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:space-y-20 bg-[#F1F5F9]">
        <Hero />
        <Products />
        <OfferSec />
        <HotDeal />
        <DeliverySec/>
        <About/>
        <MissionVission/>
        <Review/>
        <FrequentlyAsked/>
        <Connect/>
      </div>
    </>
  );
};

export default Home;
