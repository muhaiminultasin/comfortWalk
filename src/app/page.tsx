import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";

const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-32">
        <Hero />
        <Products />
      </div>
    </>
  );
};

export default Home;
