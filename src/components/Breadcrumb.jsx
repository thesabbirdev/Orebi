import React from 'react'
import { Link } from 'react-router-dom'
import { TfiAngleRight } from "react-icons/tfi";
const Breadcrumb = () => {

    let breadC = window.location.pathname.replace("/","").replace("-"," ")

  return (
    <div className="brdcmb flex items-center gap-1 mb-[125px] mt-[11px]">
            <Link to='/'><h2 className='font-dmsans text-xs text-third font-normal'>Home</h2></Link> 
            <h2 className='font-dmsans text-xs text-third font-normal'><TfiAngleRight /></h2>
            <Link><h2 className='first-letter:uppercase font-dmsans text-xs text-third font-normal'>{breadC}</h2></Link>
    </div>
    
  )
}

export default Breadcrumb