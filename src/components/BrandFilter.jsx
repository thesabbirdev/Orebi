import React, { useState } from 'react'

import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { IoMdArrowDropup } from "react-icons/io";

function BrandFilter({brandItems,handleBrand,selectedCategory}) {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`w-full ${
      isOpen ? "mb-[53px]" : ""
    }`}>
        
        <div className={`flex justify-between mb-[35px]`}>
        <Subheading className="cursor-pointer" text="Shop by Brand" onClick={() => setIsOpen(!isOpen)}/>
        <IoMdArrowDropup className={`transition-transform transform rotate-180${
            isOpen ? "rotate-180" : ""
          }`}/>
        </div>
        <div
        className={`overflow-hidden overflow-y-auto transition-max-height duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {brandItems.map((items,i)=>(

        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5" key={i}>
        <Paragraph text={items} className={`font-normal text-sm text-third duration-150 cursor-pointer ${selectedCategory == items ? "!text-primary !text-base":""}`} onClick={()=>handleBrand(items)}/>
        </div>
        ))}
        
        </div>
    </div>
  )
}

export default BrandFilter