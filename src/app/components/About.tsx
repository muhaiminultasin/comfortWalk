import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white py-16 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl font-bold text-[#1E3A8A] pb-8">Get to Know Us</h1>
        <p className="text-lg  mx-auto text-gray-600">
          We&apos;re a local brand passionate about delivering comfort and style to
          your doorstep. From everyday essentials to statement pieces, we offer
          shoes that blend fashion with function — at prices you&apos;ll love.
        </p>

        <p className="text-lg  mx-auto text-gray-600 mt-5">
          Whether you&apos;re running errands or dressing up for the weekend, we&apos;re
          here to make sure you do it in style.
        </p>
      </div>
      <div className="relative min-h-60 md:min-h-80">
        <Image
          src="/images/aboutShoe.avif"
          alt="About our shoe collection"
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default About;
