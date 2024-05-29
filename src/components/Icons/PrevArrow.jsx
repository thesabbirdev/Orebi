import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

function PrevArrow({onClick}) {
  return (
    <div onClick={onClick} className='absolute left-0 z-10 bottom-1/2 cursor-pointer'>
        <div className='w-[60px] h-[60px] rounded-full bg-[#979797] grid place-content-center'>
        <FaLongArrowAltLeft  className='text-white text-xl'/>
        </div>
    </div>
  )
}

export default PrevArrow