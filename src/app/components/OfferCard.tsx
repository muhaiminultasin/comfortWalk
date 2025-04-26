import React, { ReactNode } from "react";
import { cn } from "../lib/cn";

interface cardProps {
  img: ReactNode;
  headLine: string;
  desc: string;
  layout:string,
}

const OfferCard = ( { img, headLine, desc,layout }: cardProps
) => {
  return (
    <div className={cn("flex gap-5 bg-linear-to-l from-white to-[#F1F5F9] shadow-sm px-5 py-5 rounded-lg border-s-4 border-orange-500",layout)}>
      <div>
       <div>
        {img}
       </div>
      </div>

      <div className="w-[90%] min-h-[100px]">
        <h1 className="text-xl font-semibold">{headLine}</h1>
        <p className="text-gray-500 text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default OfferCard;
