import React from "react";
import Button from "./Button";
import Image from 'next/image';
// import Slider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="w-full  px-10 md:px-20  grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden">
      <div className="pt-32">
        <h1 className="text-5xl md:text-6xl font-bold text-[#E30B5C]">Comfort in every step __</h1>
        <p className="text-2xl mt-5 font-medium text-[#474646]">With ComfortWalk</p>
        <p className="mt-3 text-[#474646]">
          ComfortWalk offers simple, stylish, and comfortable shoes for men and
          women. Made for everyday steps.
        </p>

        <Button name="Shop Now" btnClass={""} />
      </div>

      <div className="w-full flex justify-center items-center">
        {/* <Slider /> */}
        <Image src="/images/hero.png" alt="hero" className="w-full"/>
      </div>
    </div>
  );
};

export default Hero;