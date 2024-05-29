import React from 'react'

const Input = ({labelname,inputph,inputype,value,className,onchange}) => {
  return (
    <div className='w-full'>
    <label htmlFor="" className='font-dmsans font-bold text-primary text-base block mb-[10px]'>{labelname}</label>
    <input onChange={onchange} type={inputype} name={labelname} value={value} className={`${className} font-dmsans w-full focus:outline-none border-b-2 border-[#F0F0F0] placeholder:text-sm placeholder:text-secondary pb-[17px]`} placeholder={inputph} />
    </div>
  )
}

export default Input