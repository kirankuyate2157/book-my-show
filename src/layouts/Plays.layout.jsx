import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import PlayPage from "../components/pages/Plays.page";
const PlayLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroCarousal />
        <PlayPage />
      </div>
    </>
  );
};

export default PlayLayout;
