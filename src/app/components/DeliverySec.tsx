import React from "react";
import SecTitle from "./SecTitle";
import OfferCard from "./OfferCard";
import { CiShoppingCart } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";

const DeliverySec = () => {
  const deliverInfo = [
    {
      img: <CiShoppingCart className="text-[30px] text-orange-500" />,
      headLine: "Fast Delivery",
      desc: "Delivered within 3 business days nationwide",
    },
    {
      img: <LiaShippingFastSolid className="text-[30px] text-orange-500" />,
      headLine: "Hassle-free Returns",
      desc: "Easy returns within 7 days of purchase (Conditions Applied)",
    },
    {
      img: <CiGift className="text-[30px] text-orange-500" />,
      headLine: "Secure Packaging",
      desc: "Your shoes arrive in perfect condition",
    },
  ];

  return (
    <div className="mt-15 md:mt-0 px-5 md:px-10 text-center ">
      <SecTitle
        title={" Fast, Reliable Delivery"}
        subtitle={
          "We guarantee safe, fast, and trackable delivery across Bangladesh."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
        {deliverInfo.map(({ img, headLine, desc }, i) => {
          return (
            <OfferCard
              key={i}
              img={img}
              headLine={headLine}
              desc={desc}
              layout={"flex flex-col items-center text-center"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DeliverySec;
