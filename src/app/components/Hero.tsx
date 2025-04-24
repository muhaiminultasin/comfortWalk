import React from "react";
import Button from "./Button";
import Image from "next/image";
// import Slider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-32 px-10 md:px-20 rounded-b-3xl">
      <div className=" absolute inset-0 w-full md:h-screen   items-center gap-10 overflow-hidden text-white bg-[url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[#385195] opacity-90 mix-blend-multiply"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Step into Style – Find Your Perfect Pair
          </h1>

          <p className="mt-3 text-xl">
            Trendy, comfy, and made to last. Discover our latest collection of
            stylish shoes for every step of your journey.
          </p>
        </div>

        <Button name="Shop Now" btnClass={""} />
      </div>
    </section>
  );
};

export default Hero;
