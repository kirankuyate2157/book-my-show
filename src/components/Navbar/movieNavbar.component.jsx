import React from "react";
import { BiShareAlt, BiCaretDown, BiSearch, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className=" text-white flex px-2 items-center justify-between">
        <div>
          {/* <div className="item-center w-3/5 gap-3 "> */}
          <h3 className=" text-xl font-bold">It All Starts Here!</h3>
        </div>
        <div className="  w-8 h-8 p-1">
          <BiShareAlt className="h-full w-full" />
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
            <img
              src="https://png2.cleanpng.com/sh/35072b99cbadffd0457705510368b1b6/L0KzQYm3VMA3N5Zqj5H0aYP2gLBuTfJwd5xykeVxb4ewhrr6gftpaaFmjNDqbT33ebTyhgQua5DyiNN3eT3mf8b3jB4ue5l0jAU2NXHmR7S5hMgyPJc3SaM3MUO5QoOAUsMyPWM4SKY5OUi3QIm8WL5xdpg=/kisspng-bookmyshow-visakhapatnam-ticket-company-coupon-shows-5ac7c2d814f211.1362272315230409840858.png"
              alt="logo"
              className="w-full h-full"
            />
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
          <span className="flex text-gray-300 items-center text-xs gap-1 hover:text-white cursor-pointer ">
            Nashik
            <BiCaretDown />
          </span>
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

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg   lg:bg-snav-800 block md:bg-snav-800  lg:relative md:relative">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:block  lg:hidden">
          <NavLg />
        </div>
        <div className="hidden lg:flex ">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
