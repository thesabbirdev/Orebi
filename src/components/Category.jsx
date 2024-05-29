import React, { useContext } from 'react'
import Subheading from './Subheading'
import Paragraph from './Paragraph'
import { FaPlus } from "react-icons/fa6";

function Category({categoryItems,filterItem,setCateProducts,selectedCategory,setSelectedCategory}) {

    
  return (
    <div className='w-full mb-[53px]'>
        <Subheading className="mb-[35px]" text="Shop by Category"/>
        <div className="border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="all" className='font-normal text-sm text-third capitalize cursor-pointer' onClick={()=>{
          setCateProducts([])
          setSelectedCategory("all")
          }}/>
        </div>
        {categoryItems.map((items,i)=>(
          <div className="border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text={items} className={`font-normal text-sm text-third capitalize cursor-pointer duration-500 transition-all ${selectedCategory == items ? "!text-primary !text-base":""}`} key={i} onClick={()=>filterItem(items)}/>
        </div>
        ))}

    </div>
  )
}

export default Category