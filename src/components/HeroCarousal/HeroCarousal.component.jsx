import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  const settingLG = {
    arrow: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = {
    arrow: true,
    autoplay: true,
    centerMode: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className=" lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-2 px-1">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
