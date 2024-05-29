import React, { useState } from "react";
import Subheading from "./Subheading";
import Paragraph from "./Paragraph";
import { IoMdArrowDropup } from "react-icons/io";
import DotColor from "./Icons/DotColor";

function ColorFilter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`w-full ${
        isOpen ? "mb-[53px]" : ""
      }`}>
      <div className="flex justify-between mb-[35px]">
        <Subheading
          className="cursor-pointer"
          text="Shop by Color"
          onClick={() => setIsOpen(!isOpen)}
        />
        <IoMdArrowDropup
          className={`transition-transform transform rotate-180${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
          <DotColor fill="black" />
          <Paragraph
            text="Color 1"
            className="ms-[10px] font-normal text-sm text-third"
          />
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
          <DotColor fill="#FF8686" />
          <Paragraph
            text="Color 2"
            className="ms-[10px] font-normal text-sm text-third"
          />
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
          <DotColor fill="#7ED321" />
          <Paragraph
            text="Color 3"
            className="ms-[10px] font-normal text-sm text-third"
          />
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] mb-5 pb-5">
          <DotColor fill="#B6B6B6" />
          <Paragraph
            text="Color 4"
            className="ms-[10px] font-normal text-sm text-third"
          />
        </div>
        <div className="flex items-center border-b-2 border-[#F0F0F0] pb-5">
          <DotColor fill="#15CBA5" />
          <Paragraph
            text="Color 5"
            className="ms-[10px] font-normal text-sm text-third"
          />
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;
