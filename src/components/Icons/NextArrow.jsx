import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function NextArrow({onClick}) {
  return (
    <div onClick={onClick} className='absolute right-0 bottom-1/2 cursor-pointer'>
        <div className='w-[60px] h-[60px] rounded-full bg-[#979797] grid place-content-center'>
        <FaLongArrowAltRight  className='text-white text-xl'/>
        </div>
    </div>
  )
}

export default NextArrow