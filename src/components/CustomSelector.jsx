import React from "react";

function CustomSelector({ option, defaultvalue, className, handlePerPage }) {
  return (
    <form className={`max-w-sm ${className}`}>
      <select onChange={(e)=>handlePerPage(+e.target.value)} className="bg-white border border-[#F0F0F0] text-[#767676] text-base font-dmsans outline-none block w-full px-[22px] py-[10px]">
        <option selected>{defaultvalue}</option>

        {option?.map((item, i) => (
          <option value={item} key={i}>{item}</option>
        ))}
      </select>
    </form>
  );
}

export default CustomSelector;
