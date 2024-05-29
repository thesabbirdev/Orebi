import React from 'react'
import Subheading from './Subheading'
import Paragraph from './Paragraph'

function PriceFilter() {
  return (
    <div className='w-full '>
        
        <div className="mb-[35px]">
        <Subheading className="" text="Shop by Price"/>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="$0.00 - $9.99" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="$10.00 - $19.99" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="$20.00 - $29.99" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] mb-5 pb-5">
        <Paragraph text="$30.00 - $39.99" className='font-normal text-sm text-third'/>
        </div>
        <div className=" border-b-2 border-[#F0F0F0] pb-5">
        <Paragraph text="$40.00 - $69.99" className='font-normal text-sm text-third'/>
        </div>
    </div>
  )
}

export default PriceFilter