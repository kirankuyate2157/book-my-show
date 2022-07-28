import React from "react";

import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
const HomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-3 text-gray-800">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};
export default HomePage;
