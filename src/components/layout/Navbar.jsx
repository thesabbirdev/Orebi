import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import List from "../List";
import LOGO from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import { useDispatch } from "react-redux";
import { pageName } from "../../slices/breadcrumbSlice";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // menu data
  let menu = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "shop" },
    { name: "Contact", path: "contact" },
    { name: "About", path: "about" },
    { name: "Journal", path: "journal" },
  ];
  // for active menu
  const [active, setActive] = useState(0);

  // for breadcrumbs
  let dispatch = useDispatch();

  let handleBreadcrumb = (name) => {
    dispatch(pageName(name));
  };
  // for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  let toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="sm:py-[32px] py-4 bg-white">
      <Container>
        <Flex>
          <div className="w-1/3">
            <Link to="/">
              <Image src={LOGO} />
            </Link>
          </div>
          <div className="w-1/3">
            <ul>
              <Flex className="justify-center hidden sm:flex">
                {menu.map(({ name, path }, i) => (
                  <List
                    key={i}
                    onClick={() => {
                      handleBreadcrumb(name);
                      setActive(i);
                    }}
                    href={path}
                    text={name}
                    className={`text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300 ${
                      active === i ? "!text-primary !font-bold" : "text-secondary"
                    }`}
                  />
                ))}
              </Flex>
            </ul>
            {/* mobile menu starts */}
            <div className="sm:hidden flex justify-center" onClick={toggleMenu}>
              <div>
                {menuOpen ? (
                  <RxCross2 className="text-xl cursor-pointer" />
                ) : (
                  <FaBars className="cursor-pointer" />
                )}
              </div>
            </div>
            <ul
              onClick={closeMenu}
              className={`${
                menuOpen ? "left-0" : "left-[-100%]"
              } flex-col justify-center h-fit w-full duration-300 flex text-center absolute bg-white z-40`}
            >
              {menu.map(({ name, path }, i) => (
                <List
                  key={i}
                  onClick={() => {
                    handleBreadcrumb(name);
                    setActive(i);
                  }}
                  href={path}
                  text={name}
                  className={`text-secondary hover:text-primary text-[14px] mx-5 font-normal duration-300 ${
                    active === i ? "!text-primary" : "text-secondary"
                  }`}
                />
              ))}
            </ul>
            {/* mobile menu ends*/}
          </div>
          <div className="w-1/3 flex gap-2 justify-end">
            <Link>
              <Paragraph text="EN" className="text-sm font-bold text-primary" />
            </Link>
            <Link>
              <Paragraph text="RU" className="text-sm font-normal text-third" />
            </Link>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
