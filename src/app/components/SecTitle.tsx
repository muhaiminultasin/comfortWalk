
import React from 'react'

interface titleProps {
    title: string,
    subtitle: string
}

const SecTitle = ({title,subtitle} : titleProps) => {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-[#1E3A8A] pb-8 text-center'>{title}</h1>
      <p className='text-xl md:w-1/2 mx-auto text-gray-600'>{subtitle}</p>
    </div>
  )
}

export default SecTitle
