import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight, BiCaretDown, BiSearch, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className=" text-white flex items-center justify-between">
        <div className="item-center w-3/5 gap-3 ">
          <h3 className="font-bold">It All Starts Here!</h3>
          <span className="flex text-gray-400 items-center text-xs">
            Nashik
            <BiChevronRight />
          </span>
        </div>
        <div className="  w-full item-center justify-end gap-4  flex h-8">
          <button className="bg-red-500 text-white px-4 py-1 text-sm rounded">
            Use App
          </button>
          <BiSearch className="h-full w-7" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch className="bg-white " />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none "
        placeholder="Search for movies,events,Plays,Sports and Activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className=" flex item-center w-3/5 gap-3 p-1">
          <div className="w-1/5 h-10 ">
            <Link to={"/"}>
              <img
                src="https://www.viralbake.com/wp-content/uploads/2021/06/bookmyshow.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className=" w-full p-1 item-content">
            <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
              <BiSearch className="bg-white " />
              <input
                type="search"
                className="w-full bg-transparent border-none focus:outline-none "
                placeholder="Search for movies,events,Plays,Sports and Activities"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <Link to={"/plays/"}>
            <span className="flex text-gray-300 items-center text-xs gap-1 hover:text-white cursor-pointer ">
              Nashik
              <BiCaretDown />
            </span>
          </Link>
          <button className="bg-red-500 text-white px-4 py-1 text-sm rounded ">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-snav-800 p-2  ">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        <div className="hidden lg:flex ">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
