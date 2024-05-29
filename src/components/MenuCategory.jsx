import React from 'react'
import Paragraph from './Paragraph'

function MenuCategory({className}) {
  return (
    <div className={`w-[263px] h-[300px] bg-primary grid grid-rows-6 absolute top-[100px] sm:top-[160px] ${className}`}>
        <div className="flex px-[22px] justify-between items-center group border-b border-[#2D2D2D]">
            <Paragraph text='Accesories' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        <div className="flex px-[22px] justify-between items-center group border-b border-[#2D2D2D]">
            <Paragraph text='Furniture' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        <div className="flex px-[22px] justify-between items-center group border-b border-[#2D2D2D]">
            <Paragraph text='Electronics' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        <div className="flex px-[22px] justify-between items-center group border-b border-[#2D2D2D]">
            <Paragraph text='Cloths' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        <div className="flex px-[22px] justify-between items-center group border-b border-[#2D2D2D]">
            <Paragraph text='Bags' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        <div className="flex px-[22px] justify-between items-center group">
            <Paragraph text='Home Appliances' className='text-white/70 text-sm font-normal group-hover:text-white group-hover:font-bold group-hover:ps-4 duration-500'/>
            <span className='text-white/70 font-bold group-hover:text-white'>&gt;</span>
        </div>
        
    </div>
  )
}

export default MenuCategory