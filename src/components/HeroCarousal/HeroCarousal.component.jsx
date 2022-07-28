import React from "react";
import HeroSlider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
  const settingLG = {
    arrow: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrow: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images = [
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/timepass-3-et00330615-1658992324.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ek-villain-returns-et00128946-1658744061.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/vikrant-rona-et00128225-1657019014.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shamshera-et00075253-1657356503.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rocketry-et00094131-1655809015.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/minions-the-rise-of-gru-et00122133-21-04-2022-06-44-55.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hit-the-first-case-et00321702-17-06-2022-10-39-38.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ramarao-on-duty-et00312747-1657525661.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/sarsenapati-hambirrao-et00104574-16-05-2022-01-56-11.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/mahaveeryar-et00332365-1656327128.jpg",
    "https://assets-in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/green-lantern-beware-my-power-et00334223-1658934348.jpg",
  ];
  return (
    <>
      <div className=" lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-2 px-1">
              <img
                src={image}
                alt="testing"
                className="w-full  rounded-md h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingLG}>
          {images.map((image) => (
            <div className=" w-full h-96 px-1 py-3  ">
              <img
                src={image}
                alt="testing"
                className="w-full  rounded-md h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
