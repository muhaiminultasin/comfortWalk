
import React from 'react'
import OfferCard from './OfferCard'

const MissionVission = () => {

   const vissionDetails = [
        {
            title:"Our Mission",
            subtitle:"To provide high-quality, affordable shoes that bring confidence, comfort, and convenience to every step our customers take.",
        },
        {
            title:"Our Vission",
            subtitle:"To become one of the most trusted and loved shoe brands in Bangladesh, empowering everyday people through fashion-forward and reliable footwear.",
        },
    ]

  return (
    <div className='px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
      {
        vissionDetails.map(({title, subtitle},i)=> {
            return <OfferCard key={i} img={undefined} headLine={title} desc={subtitle} layout={'h-auto'}/>
        })
      }
      
    </div>
  )
}

export default MissionVission;
