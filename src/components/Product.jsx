import React from 'react'
import Image from './Image'
import Batch from './Batch'
import Flex from './Flex'
import Heading from './Heading'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { Link } from 'react-router-dom'


const Product = ({src,batch,title,price,color,cartInfo,link,className}) => {
  return (
    <div className={`w-full group ${className}`}>

        {/* ==========upper part of card start========= */}
        <div className="w-full relative overflow-hidden">

            {/* ===========image part start====== */}
            <Link to={link}>
            <Image src={src} className='w-[370px] h-[370px]'/>
            <Batch className='absolute top-5 left-6' text={batch}/>
            </Link>
            {/* ===========image part end====== */}

            {/* =====hover part start======= */}
            <div className="absolute bg-white w-full py-6 pe-[30px] -bottom-[160px] left-0 group-hover:bottom-0 duration-500">
                <Flex className="justify-end items-center gap-[15px]">
                    <Heading text="Add to Wish List" className='text-secondary text-sm xl:text-base font-normal'/>
                    <FaHeart />
                </Flex>
                <Flex className="justify-end items-center gap-[15px] my-5">
                    <Heading text="Compare" className='text-secondary text-sm xl:text-base font-normal'/>
                    <GrPowerCycle />
                </Flex>
                <Flex className="justify-end items-center gap-[15px]" onClick={cartInfo}>
                    <Heading text="Add to Cart" className='text-primary text-sm xl:text-base font-bold cursor-pointer'/>
                    <FaShoppingCart className=' cursor-pointer'/>
                </Flex>
            </div>
            {/* =====hover part end======= */}
        </div>
        {/* =========upper part of card end========= */}

        {/* =========lower part of card========= */}
        <div className="w-full pt-[24px]">
            <Link className='flex justify-between' to={link}>
            <Heading text={title} className='font-bold text-base xl:text-xl text-primary'/>
            <Heading text={price} className='font-normal text-sm xl:text-base text-secondary'/>
            </Link>
            <Heading className='font-normal text-sm xl:text-base text-secondary mt-[15px]' text={color}/>
        </div>
        {/* =========lower part of card end========= */}
    </div>
  )
}

export default Product