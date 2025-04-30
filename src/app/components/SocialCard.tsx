import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaBorderAllSolid } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";

const SocialCard = () => {


    const CardContent = [
        {
            icon: <CiShoppingCart className="text-[30px] text-orange-500"/>,
            text:"Shop Now"
        },
        {
            icon: <SlSocialFacebook className="text-[30px] text-orange-500"/>,
            text:"Message us on Facebook"
        },
        {
            icon: <IoChatboxOutline className="text-[30px] text-orange-500"/>,
            text:" Contact Support"
        },
        {
            icon: <LiaBorderAllSolid className="text-[30px] text-orange-500"/>,
            text:"Track Your Order"
        },
        {
            icon: <CiInstagram className="text-[30px] text-orange-500"/>,
            text:"Follow us on Instagram"
        },
        {
            icon: <TbTruckReturn className="text-[30px] text-orange-500"/>,
            text:"Return & Exchange Policy"
        }
    ]

  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  md:w-fit mx-auto'>
      {CardContent.map(({icon, text},i) => {
        return <div key={i} className='flex bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-250 rounded-lg cursor-pointer text-gray-700  text-md group'>
            <div>
            {icon}
            </div>
            <div className='ms-5 group-hover:text-[#1E3A8A] font-semibold'>{text}</div>
        </div>
      })}
    </div>
  )
}

export default SocialCard;
