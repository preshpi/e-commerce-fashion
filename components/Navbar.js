import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

   const [searchQuery, setSearchQuery] = useState("");
   const [currentPlaceholder, setCurrentPlaceholder] = useState("Search");
   const placeholders = ["clothes", "shoes", "bags", "jewelry", "kids"];

   const handleSearch = () => {
     // Add your search logic here
   };

   const handleInputChange = (e) => {
     setSearchQuery(e.target.value);
   };

   useEffect(() => {
     const intervalId = setInterval(() => {
       setCurrentPlaceholder(
         placeholders[Math.floor(Math.random() * placeholders.length)]
       );
     }, 3000);

     return () => {
       clearInterval(intervalId);
     };
   }, []);

   const navbarRef = useRef(null);

   useEffect(() => {
     const handleClickOutside = (event) => {
       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
         handleClose();
       }
     };

     if (nav) {
       window.addEventListener("click", handleClickOutside);
     }

     return () => {
       window.removeEventListener("click", handleClickOutside);
     };
   }, [nav]);
  return (
    <div className="top-0 relative mx-auto p-5 w-full">
      {/* large screen */}
      <div className="lg:block md:block hidden">
        <div className="flex justify-between ">
          <h1 className="text-3xl">FashionFlair</h1>

          <form className="items-center justify-center relative lg:w-[500px] md:w-[300px]">
            <input
              className="border border-[#E4E5E4] text-[#757575] rounded py-2 px-4 pr-12 outline-none lg:w-[500px] md:w-[300px] bg-none"
              type="text"
              placeholder={`Search ${currentPlaceholder}`}
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="absolute top-0 right-0  font-bold py-2 px-4 text-white text-2xl h-full bg-black">
              <AiOutlineSearch />
            </button>
          </form>

          <div className="items-center justify-center">
            <ul className="flex space-x-6 items-center justify-center text-xl">
              <li className="cursor-pointer">
                <AiOutlineSearch />
              </li>
              <li className="cursor-pointer">
                <AiOutlineHeart />
              </li>
              <li className="cursor-pointer">
                <AiOutlineShoppingCart />
              </li>
              <li className="cursor-pointer">
                <RxPerson />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* small screen */}
      <div className="lg:hidden md:hidden block">
        <div className="flex justify-between">
          <div onClick={handleClick}>
            {!nav ? (
              <div className="flex items-center justify-center space-x-5">
                <AiOutlineMenu className="text-[28px] cursor-pointer text-black" />
                <h1 className="text-3xl">FlaireStyle</h1>
              </div>
            ) : (
              <AiOutlineClose className="hidden" />
            )}
          </div>

          <ul className="flex space-x-6 items-center justify-center text-xl">
            <li className="cursor-pointer">
              <AiOutlineSearch />
            </li>
            <li className="cursor-pointer">
              <AiOutlineShoppingCart />
            </li>
            <li className="cursor-pointer">
              <RxPerson />
            </li>
          </ul>

          <div
            className={
              !nav
                ? "hidden"
                : "h-full fixed bg-[white] w-[80%] left-0 top-0 z-10 transition-all duration-300 drop-shadow-lg"
            }
          >
            <div className="flex space-x-5 w-full pt-5 p-3">
              <AiOutlineClose
                onClick={handleClose}
                className="text-[28px] items-center justify-center cursor-pointer text-black transition-all duration-300"
              />
              <h1 className="text-3xl">FashionFlair</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
