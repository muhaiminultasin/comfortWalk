import React from 'react'
import Button from './Button'

const HotDeal = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-start bg-[#3F579B] mx-auto w-[95%] rounded-lg min-h-[130px] px-10 py-8 text-white'>
      <div>
        <h1 className='text-4xl font-bold'>This Week&apos;s Hot Deal!</h1>
        <p className='text-lg text-gray-300 mt-5 md:w-7/12'>Upgrade your shoe game with our Flash Sale! 🎉 Up to 30% OFF on selected styles – Sneakers, Loafers, and more!</p>
        <p className='text-xl font-bold mt-5'>⏳ Hurry! Offer ends Sunday night.</p>
      </div>

      <div className=''>
        <Button name={'Shop now'} btnClass={''}/>
      </div>
    </div>
  )
}

export default HotDeal
