import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";
//components
import Poster from "../Poster/Poster.component";
//  config
import PosterCarouselSettings from "../config/PosterCarousel.config";
import PremierImages from "../config/TempPosters.config";
const Premier = () => {
  return (
    <>
      <div flex className=" flex items-center justify-between">
        <div className=" flex flex-col items-start">
          <div>
            <h3 className=" text-white font-bold text-xl">Premiers</h3>

            <p className=" text-white  text-sm">
              Brand new release every friday
            </p>
          </div>
        </div>
        <span className="flex text-red-500 items-center text-xs gap-1 cursor-pointer ">
          See All
          <BiChevronRight />
        </span>
      </div>
      <Slider {...PosterCarouselSettings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
