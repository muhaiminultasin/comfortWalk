import Image from "next/image";
import React from "react";
import Button from "./Button";
import SecTitle from "./SecTitle";

const Products = () => {
  const productsDetails = [
    {
      img: "/images/Slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/Slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/Slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/Slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
  ];

  return (
    <div className="px-10  min-h-screen">
      <div className="py-10 text-center">
        <SecTitle title="Our Products" subtitle="Our most popular picks, loved by thousands. From sneakers to sandals – we've got you covered."/>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
        {productsDetails.map(({ img, name, price,category }, index) => (
          <div
            key={index}
            className="flex flex-col justify-between min-h-[400px] md:min-h-[300px] lg:min-h-[450px] bg-[#FFF] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-[70%] md:h-[60%] overflow-hidden ">
              <Image src={img} alt={name} fill className="rounded-t-lg hover:scale-105 transition-all duration-300" />
            </div>

            <div className="px-3 mb-5">
              <div className="mt-2 ">
                <h1 className=" text-xl font-semibold">{name}</h1>
                <p className="text-sm">{category}</p>
                
              </div>
              <div className="flex justify-between items-center">
              <h2 className="text-[#1E3A8A] font-semibold">৳ {price}</h2>
                <Button name="order" btnClass="py-1 px-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
