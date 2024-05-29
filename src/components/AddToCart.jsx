import React from 'react'
import Image from './Image'
import watch from '../assets/cartimage.png'
import Subheading from '../components/Subheading'
import { ImCross } from "react-icons/im";
import Button from './Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../slices/singleSlice';


function AddToCart({className}) {
  let data = useSelector((state)=>state.singleproduct.cartitem)
  let dispatch = useDispatch()
   // for sum total price
   const { totalprice, totalquantity } = data.reduce(
    (acc, item) => {
      acc.totalprice += item.price * item.qun;
      acc.totalquantity += item.qun;
      return acc;
    },
    { totalprice: 0, totalquantity: 0 }
  );
  return (
    <div className={`w-[360px] max-h-[500px] overflow-y-auto bg-white border border-[#F0F0F0] ${className}`}>
      {data.map((item,i)=>(
        <div className="h-[120px] w-full bg-[#F5F5F3] px-[21px] py-[22px] flex items-center" key={i}>
                <Image src={item.thumbnail} alt='watch' className='me-[22px] h-[100px] w-[100px]'/>
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-y-5">
                        <Subheading text={item.title} className='text-sm font-bold'/>
                        <Subheading text={`$${item.price}`} className='text-sm font-bold'/>
                    </div>
                    <ImCross onClick={()=>dispatch(removeProduct(i))} className='cursor-pointer'/>
                </div>
        </div>
      ))
      }
        <div className="h-[120px] p-[20px] w-full bg-white ">
              <p className='text-base text-third'>SubTotal: <Subheading text={`$${totalprice}`} className='inline-block text-sm font-bold'/></p>
              <div className="w-full mt-3 flex justify-between">
               <Link to='/cart-list'><Button text='View Cart' className='py-4 px-10 bg-white text-primary border border-primary hover:bg-primary hover:text-white duration-300'/></Link>
               <Link to='/checkout'><Button text='Checkout' className='py-4 px-10 bg-white text-primary border border-primary hover:bg-primary hover:text-white duration-300'/></Link>
              </div>
        </div>
    </div>
  )
}

export default AddToCart