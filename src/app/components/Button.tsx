import React from 'react'
import { cn } from '../lib/cn'

interface ButtonProps {
    name : string,
    btnClass: string,
}

const Button = ({name,btnClass}: ButtonProps) => {

  return (
    <div>
      <button className={cn("bg-[#E30B5C] text-white px-4 py-2 rounded mt-5",btnClass)}>{name}</button>
    </div>
  )
}

export default Button;