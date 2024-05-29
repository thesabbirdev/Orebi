import React, { useContext, useState } from "react";
import Product from "../Product";
import { ApiData } from "../ContextApi";
import PaginationNum from "../PaginationNum";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/singleSlice";

function ProductShop() {
  // for api calling
  let data = useContext(ApiData);

  //for product per page if you want to change then change the value of useState
  const [perPage, setPerPage] = useState(6);

  const [currentPage, setCurrentPage] = useState(1);

  // dyanamic calculation for showing limited product in one page
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = data.slice(firstPage, lastPage);
  
  //  for navigation buttons calculation
  let totalProducts = data.length;
// for sending product data to cart
let dispatch = useDispatch();
let handleCart = (item) => {
  dispatch(addToCart({...item, qun:1}));
  console.log("cart",item);
};
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-10">
        {allPage.map((item) => (
          
          <Product
            key={item.id}
            title={item.title}
            price={`$${item.price}`}
            color={item.brand}
            batch={`-${item.discountPercentage}%`}
            src={item.thumbnail}
            cartInfo={()=>handleCart(item)}
            link={`/shop/${item.id}`}
          />
         
        ))}
      </div>
      <PaginationNum
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
        perPage={perPage}
      />
    </div>
  );
}

export default ProductShop;
