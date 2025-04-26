import React from 'react'
import SecTitle from './SecTitle'
import OfferCard from './OfferCard';
import { CiShoppingCart } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";



const OfferSec = () => {

  const offCardDetails = [
    {
      img:<CiShoppingCart className='text-[30px] text-orange-500'/>,
      headLine:"20% Off on Orders over ৳1999",
      desc:"On selected styles. Limited time offer."
    },
    {
      img:<LiaShippingFastSolid className='text-[30px] text-orange-500'/>,
      headLine:"Free Shipping on Orders Over ৳999",
      desc:"Nationwide delivery at no extra cost."
    },
    {
      img:<CiGift className='text-[30px] text-orange-500'/>,
      headLine:"10% Off Your First Order",
      desc:"Use Code WELCOME10 at checkout."
    },
  ]



  return (
    <section className='px-10 py-20'>
      <div className='w-fit mx-auto'>
        <SecTitle title=' Limited-Time Offers' subtitle='' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          offCardDetails.map(({img,headLine,desc},i)=> {
            return (
              <OfferCard key={i} img={img} headLine={headLine} desc={desc} layout={''} />
            )
          })
        }
      </div>
    </section>
  )
}

export default OfferSec;
