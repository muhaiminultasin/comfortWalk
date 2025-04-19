import Image from "next/image";
import React from "react";
import Button from "./Button";

const Products = () => {
  const productsDetails = [
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
    {
      img: "/images/slider2.jpg",
      name: "Womans slipper",
      price: 490,
      category: "Woman",
      sizes: [38, 39, 40, 41],
    },
  ];

  return (
    <div className="px-10 md:px-20 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {productsDetails.map(({ img, name, price }, index) => (
        <div key={index} className="h-[300px]">
          <div className="relative w-full h-[60%] ">
          <Image src={img} alt={name} fill />
          </div>
          <div className="mt-2">
            <h1 className="font-semibold">{name}</h1>
            <h2 className="text-gray-600">৳{price}</h2>
          </div>
          <div>
            <Button name="Buy Now" btnClass="py-1 px-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
