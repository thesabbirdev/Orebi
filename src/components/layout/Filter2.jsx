import React, { useEffect, useState } from "react";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import CustomSelector from "../CustomSelector";

const Filter2 = ({ className, toggleView, handlePerPage }) => {
  // for custom selecting data for showing perpage
  let option = [12, 18, 24, 30, 36];
  let sortOption = ["Best Seller", "New Arrival", "Final Offer"];

  // for selected view
  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);
  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    gridView.addEventListener("click", () => {
      setListViewActive(false);
      setGridViewActive(true);
    });
    listView.addEventListener("click", () => {
      setGridViewActive(false);
      setListViewActive(true);
    });
  }, [girdViewActive, listViewActive]);
  return (
    <div className={`${className} !w-full`}>
      <div className="flex justify-between !w-full">
        <div className="flex w-24">
          <span
            onClick={() => toggleView("grid")}
            className={`${
              girdViewActive
                ? "bg-primary text-white"
                : "border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 text-lg me-5 flex items-center justify-center cursor-pointer gridView`}
          >
            <BsGridFill />
          </span>
          <span
            onClick={() => toggleView("list")}
            className={`${
              listViewActive
                ? "bg-primary text-white"
                : "border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
          >
            <ImList />
          </span>
        </div>

        <div className="w-[550px] flex justify-between">
          <Flex className="items-center w-[350px]">
            <Paragraph
              text="Sort by:"
              className="text-third font-normal text-base me-[14px]"
            />
            <div className="w-[239px]">
              <CustomSelector
                defaultvalue={`Featured`}
                option={sortOption}
                className={`w-full`}
              />
            </div>
          </Flex>
          <Flex className="items-center">
            <Paragraph
              text="Show:"
              className="text-third font-normal text-base me-[14px]"
            />
            <div className="w-[139px]">
              <CustomSelector
                defaultvalue={6}
                option={option}
                className={`w-full border border-[#F0F0F0]`}
                handlePerPage={handlePerPage}
              />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Filter2;
