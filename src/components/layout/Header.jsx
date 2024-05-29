import React, { useState, useEffect, useRef, useContext } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import user from "../../assets/Icon_user.svg";
import cart from "../../assets/Icon_cart.svg";
import Bar from "../Icons/Bar";
import Search from "../Icons/Search";
import UserPopup from "./UserPopup";
import UserPopup2 from "./UserPopup2"
import MenuCategory from "../MenuCategory";
import AddToCart from "../AddToCart";
import Navbar from "./Navbar";
import { ApiData } from "../ContextApi";
import Subheading from "../Subheading";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  let menuRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current.contains(e.target) == true) {
        setMenu(!menu);
      } else {
        setMenu(false);
      }
      if (userRef.current.contains(e.target) == true) {
        setUserOpen(!userOpen);
      } else {
        setUserOpen(false);
      }
      if (cartRef.current.contains(e.target) == true) {
        setCartOpen(!cartOpen);
      } else {
        setCartOpen(false);
      }
    };

    document.addEventListener("click", handler);
  }, [menu, userOpen, cartOpen]);

  //for  searching dynamically product

  const [searchWord, setSearchWord] = useState("");
  // for api calling
  let data = useContext(ApiData);
  const [filteredData, setFilteredData] = useState([]);

  let handlesearch = (e) => {
    const searchTerms = e.target.value;
    setSearchWord(searchTerms);

    if (searchTerms == "") {
      setFilteredData([]);
    } else {
      // for filtering product
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
  // console.log(filteredData);

  // for clicking search button
  let navigate = useNavigate();
  let handleSearchClick = (e) => {
    navigate("/search", { state: { key: filteredData, search: searchWord } });
    setSearchWord("");
  };
  let setSearchKey = (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
      navigate("/search", {
        state: { key: filteredData, search: searchWord },
      });
      setSearchWord("");
    }
  };
  // for using raw tooltip
  let info = useSelector((state) => state.singleproduct.cartitem);
  // console.log(info);
  return (
    <div className="sticky top-0 w-full left-0 z-50">
      <Navbar />
      <section className="bg-header py-[25px] border-b-2 border-borderColor">
        <Container>
          <Flex className="items-center sm:flex-row flex-col">
            <div className="w-full sm:w-1/3">
              <div className="cursor-pointer" ref={menuRef}>
                <Flex className="items-center gap-2.5">
                  <Bar />
                  <p className="text-primary font-dmsans text-[14px] font-normal">
                    Shop by Category
                  </p>
                </Flex>
              </div>
              {menu && <MenuCategory className={`z-50`} />}
            </div>
            <div className="w-full py-3 sm:py-0 sm:w-1/3 relative">
              <input
                value={searchWord}
                onChange={handlesearch}
                onKeyUp={setSearchKey}
                type="text"
                placeholder="Search Products"
                className="w-full py-4 ps-[21px] placeholder:text-[14px] placeholder:text-[#C4C4C4] focus:outline-none"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[17px]"
                onClick={handleSearchClick}
              >
                <Search className={`cursor-pointer`} />
              </div>
              <div className={`absolute bottom-100 w-full overflow-auto ${searchWord?"h-96":"h-0"}`}>
                {searchWord &&
                  filteredData.map((item, i) => (
                    <Link to={`/shop/${item.id}`}>
                      <div
                        className="h-[120px] w-full bg-[#F5F5F3] px-[21px] py-[22px] flex items-center"
                        key={i}
                        onClick={() => setSearchWord("")}
                      >
                        <Image
                          src={item.thumbnail}
                          className="me-[22px] h-[100px] w-[100px]"
                        />
                        <div className="flex justify-between items-center w-full">
                          <div className="flex flex-col gap-y-5">
                            <Subheading
                              text={item.title}
                              className="text-sm font-bold"
                            />
                            <Subheading
                              text={`$${item.price}`}
                              className="text-sm font-bold"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div className="w-full mt-2 sm:mt-0 sm:w-1/3">
              <Flex className="justify-end">
                <button ref={userRef}>
                  <Image src={user} className="me-[41px]" />
                </button>
                {userOpen && <UserPopup2 className={`z-50`} />}

                <button ref={cartRef} className="relative">
                  {info.length > 0 && (
                    <div className="absolute -top-5 -right-2 font-dmsans bg-primary text-white rounded-full w-5 h-5 grid place-content-center">
                      {info.length}
                    </div>
                  )}
                  <Image src={cart} className="" />
                </button>
                {cartOpen && (
                  <AddToCart className="absolute top-[210px] sm:top-[165px] right-[] z-50" />
                )}
              </Flex>
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  );
};

export default Header;
