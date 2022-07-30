import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import HomePage from "../components/pages/Home.page";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroCarousal />
        <HomePage />
      </div>
    </>
  );
};

export default HomeLayout;
