import Container from "../components/Container";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import Filter from "../components/layout/Filter";
import Flex from "../components/Flex";
import Filter2 from "../components/layout/Filter2";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import ColorFilter from "../components/ColorFilter"
import BrandFilter from "../components/BrandFilter"
import { Bounce, ToastContainer, toast } from "react-toastify";

import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ApiData } from "../components/ContextApi";
import PaginationNum from "../components/PaginationNum";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/singleSlice";

const Shop = () => {
  // for breadcrumb
  let dataa = useSelector((state) => state.breadcrumb.currentname);
  let breadC = window.location.pathname.replace("/", "").replace("-", " ");

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
  let handlePerPage =(value)=>{
    setPerPage(value)
  }
  // for sending product data to cart
  let dispatch = useDispatch();
  let handleCart = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }));
    toast("🦄 Added to Cart, Successfully!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    console.log("cart", item);
  };
  // for category product
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cateProducts, setCateProducts] = useState([]);
  const categoryItems = [...new Set(data.map((items) => items.category))];
  const brandItems = [...new Set(data.map((items) => items.brand))];
  // console.log(brandItems);

  let filterItem = (currentval) => {
    const newItem = data.filter((item) => item.category == currentval);
    setSelectedCategory(currentval);
    setCateProducts(newItem);
  };
// for brand filter
  let handleBrand =(currentval)=>{
    const brandItem = data.filter((item) => item.brand == currentval);
    setSelectedCategory(currentval);
    setCateProducts(brandItem);
  }
//for grid or list view
const [viewType, setViewType] = useState('grid');

const toggleView = (type) => {
  setViewType(type);
};

console.log(viewType);
  return (
    <section className="pt-[124px] pb-[140px]">
      <Container>
      <ToastContainer
            position="bottom-left"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
        <Flex>
          <h1 className="font-dmsans text-xs text-third font-normal">
            {dataa}
          </h1>
          <div className="px-2 font-dmsans text-xs text-third font-normal">
            &gt;
          </div>
          <h1 className="first-letter:uppercase font-dmsans text-xs text-third font-normal">
            {breadC}
          </h1>
        </Flex>
        <Heading text="Product" className="text-5xl font-bold text-primary" />
        <Breadcrumb />
        <Flex className="gap-[33px]">
          {/* ==========sidebar start======= */}

          <aside className="w-[372px]">
            <Category categoryItems={categoryItems} filterItem={filterItem} setCateProducts={setCateProducts} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <ColorFilter/>
            <BrandFilter brandItems={brandItems} handleBrand={handleBrand} selectedCategory={selectedCategory}/>
            <Filter />
          </aside>

          {/* ==========sidebar end======= */}

          {/* ==========Shop view Start======= */}
          <aside>
            <Filter2 className="mb-[60px]" toggleView={toggleView} handlePerPage={handlePerPage}/>
            <div className="w-full">
              {viewType == "grid"?
              (

              <div className="grid grid-cols-3 gap-10">
                {cateProducts.length > 0
                  ? cateProducts.map((item) => (
                      <Product
                        key={item.id}
                        title={item.title}
                        price={`$${item.price}`}
                        color={item.brand}
                        batch={`-${item.discountPercentage}%`}
                        src={item.thumbnail}
                        cartInfo={() => handleCart(item)}
                        link={`/shop/${item.id}`}
                      />
                    ))
                  : allPage.map((item) => (
                      <Product
                        key={item.id}
                        title={item.title}
                        price={`$${item.price}`}
                        color={item.brand}
                        batch={`-${item.discountPercentage}%`}
                        src={item.thumbnail}
                        cartInfo={() => handleCart(item)}
                        link={`/shop/${item.id}`}
                      />
                    ))}
              </div>
              ):(
                <div className="flex flex-col gap-y-5">
                  {cateProducts.length > 0
                  ? cateProducts.map((item) => (
                      <Product
                        key={item.id}
                        title={item.title}
                        price={`$${item.price}`}
                        color={item.brand}
                        batch={`-${item.discountPercentage}%`}
                        src={item.thumbnail}
                        cartInfo={() => handleCart(item)}
                        link={`/shop/${item.id}`}
                      />
                    ))
                  : allPage.map((item) => (
                      <Product
                        key={item.id}
                        title={item.title}
                        price={`$${item.price}`}
                        color={item.brand}
                        batch={`-${item.discountPercentage}%`}
                        src={item.thumbnail}
                        cartInfo={() => handleCart(item)}
                        link={`/shop/${item.id}`}
                      />
                    ))}
                </div>
              )}
              <PaginationNum
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}
                perPage={perPage}
                cateProducts={cateProducts}
              />
            </div>
          </aside>
          {/* ==========Shop view end======= */}
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
