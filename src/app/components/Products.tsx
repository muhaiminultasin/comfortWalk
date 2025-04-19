import Image from "next/image";
import React from "react";
import Button from "./Button";

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
    <div className="px-10 md:px-20 min-h-screen">
      <div className="py-10">
        <h1 className="text-3xl font-semibold text-primary">Our Products</h1>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {productsDetails.map(({ img, name, price }, index) => (
          <div
            key={index}
            className="min-h-[400px] md:min-h-[300px] bg-[#F0F8FF] rounded-lg shadow-xl"
          >
            <div className="relative w-full h-[70%] md:h-[60%] ">
              <Image src={img} alt={name} fill className="rounded-top-right" />
            </div>

            <div className="px-3">
              <div className="mt-2 ">
                <h1 className="font-semibold">{name}</h1>
                <h2 className="text-gray-600">৳{price}</h2>
              </div>
              <div>
                <Button name="View details" btnClass="py-1 px-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
