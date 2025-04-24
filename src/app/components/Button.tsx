import React from 'react'
import { cn } from '../lib/cn'

interface ButtonProps {
    name : string,
    btnClass: string,
}

const Button = ({name,btnClass}: ButtonProps) => {

  return (
    <div>
      <button className={cn("bg-[#f60000] hover:bg-[#ff8d14ee] text-white font-bold px-4 py-2 mt-5 cursor-pointer rounded-full transition-all duration-300",btnClass)}>{name}</button>
    </div>
  )
}

export default Button;