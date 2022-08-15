import React from "react";
import Slider from "react-slick";
import { BiChevronRight } from "react-icons/bi";

//component =
import Poster from "../Poster/Poster.component";
// config
import PosterCarouselSettings from "../config/PosterCarousel.config";

const PosterSlider = (props) => {
  const sliderConfig = props.config ? props.config : PosterCarouselSettings;

  return (
    <>
      <div flex className=" flex items-center justify-between mb-3">
        <div className=" flex flex-col items-start">
          <div>
            <h3
              className={` font-bold text-2xl ${
                props.isDark ? "text-white" : "text-gray-700"
              }`}
            >
              {props.title}
            </h3>

            <p
              className={` text-sm${
                props.isDark ? "text-white" : "text-gray-700"
              }`}
            >
              {props.subtitle}
            </p>
          </div>
        </div>
        <span className="flex text-red-500  font-bold items-center text-xs  cursor-pointer ">
          See All
          <BiChevronRight />
        </span>
      </div>
      <Slider {...sliderConfig}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};
export default PosterSlider;
